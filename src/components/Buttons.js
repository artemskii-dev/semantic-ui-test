import React from 'react';
import {Button, Card, Container, Icon, Label} from "semantic-ui-react";

const Buttons = () => {
    return (
        <Card fluid>
            <Card.Content>
                <h3>Buttons</h3>
                <Container>
                    <Button primary>Button</Button>
                    <Button secondary>Button</Button>
                    <Button animated>
                        <Button.Content visible>Next</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    <Button as='div' labelPosition='right'>
                        <Button icon>
                            <Icon name='heart' />
                            Like
                        </Button>
                        <Label as='a' basic pointing='left'>
                            2,048
                        </Label>
                    </Button>
                    <Button icon>
                        <Icon name='world' />
                    </Button>
                    <Button icon labelPosition='left'>
                        <Icon name='pause' />
                        Pause
                    </Button>
                    <Button icon labelPosition='right'>
                        Next
                        <Icon name='right arrow' />
                    </Button>
                    <Button basic color='red'>
                        Red
                    </Button>
                    <Button.Group>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </Button.Group>
                    <Button.Group>
                        <Button>Cancel</Button>
                        <Button.Or />
                        <Button positive>Save</Button>
                    </Button.Group>
                    <Button loading secondary>
                        Loading
                    </Button>
                </Container>
            </Card.Content>
        </Card>
    );
};

export default Buttons;