import React from 'react';
import {Card, Dropdown, Grid, Input} from "semantic-ui-react";

const options = [
    {key: '.com', text: '.com', value: '.com'},
    {key: '.net', text: '.net', value: '.net'},
    {key: '.org', text: '.org', value: '.org'},
]

const Inputs = () => {
    return (
        <Card fluid>
            <Card.Content>
                <h3>Inputs</h3>
                <Input placeholder='Search...'/>
                <Input loading icon='user' placeholder='Search...'/>
                <Input error placeholder='Search...'/>
                <Input icon='search' placeholder='Search...'/>
                <Input
                    icon={{name: 'search', circular: true, link: true}}
                    placeholder='Search...'
                />
                <Input label='http://' placeholder='mysite.com'/>
                <Input
                    label={<Dropdown defaultValue='.com' options={options}/>}
                    labelPosition='right'
                    placeholder='Find domain'
                />
                <Input
                    icon='tags'
                    iconPosition='left'
                    label={{tag: true, content: 'Add Tag'}}
                    labelPosition='right'
                    placeholder='Enter tags'
                />
                <Input action='Search' placeholder='Search...'/>
            </Card.Content>
        </Card>
    );
};

export default Inputs;