import React  from 'react';
import { NavLink, BrowserRouter as Router }from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Menu from 'react-semantic-ui-accordion-menu';
import { Icon } from 'semantic-ui-react';

const config  = [
    // Wen no "content" or "section" are provided provide a NavLink into the title property
    {
        id: "section-2",
        title: <NavLink exact to="/"><Icon name="home" />Home</NavLink>,
        content: null,
    },
    // When sections are provided, subaccordions will be generated
    {
        id: "section-1",
        title: [<Icon key="sitemap" name="sitemap" />,"Section 1"],
        sections: [
            {
                id: "section-1.1",
                title: [<Icon key="archive" name="archive" />,"Section 1.1"],  // When a icon is needed in title, pass it as a fragment
                content: [<NavLink key="about" exact to="/about/"><Icon name="file alternate" />About</NavLink>, <NavLink key="test" exact to="/test/"><Icon name="folder open" />Test</NavLink>],  // Multiple links in content could be also passed in as frament
            },
            {
                id: "section-1.2",
                title: [<Icon key="calculator" name="calculator" />, "Section 1.2"],  // When a icon is needed in title, pass it as a fragment
                sections: [
                    {
                        id: "section-1.2.1",
                        title: [<Icon key="camera" name="camera" />, "Section 1.2.1"],
                        content: <NavLink exact to="/users/"><Icon name="users" />Users</NavLink>,
                    }
                ]
            },
        ]
    },
];

const LeftMenu = () => {
    return (
        <Router>
            <div className="sidebar" style={{ left: 0, top: 0, bottom: 0, width: 200, borderRight: '1px solid #ccc', backgroundColor: '#002657' }}>
                <Menu
                    tree={config}
                    submenuBackgroundColor='#002657'
                    submenuFontColor='#ffffff'
                    separatorColor='rgba(255,255,255,.1)'
                />
            </div>
        </Router>
    );
};

export default LeftMenu;