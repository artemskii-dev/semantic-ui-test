import React from 'react';
import {Card, Step} from "semantic-ui-react";

const Steps = () => {
    return (
        <Card fluid>
            <Card.Content>
                <h3>Steps</h3>
                <Step.Group ordered>
                    <Step completed>
                        <Step.Content>
                            <Step.Title>Shipping</Step.Title>
                            <Step.Description>Choose your shipping options</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step completed>
                        <Step.Content>
                            <Step.Title>Billing</Step.Title>
                            <Step.Description>Enter billing information</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step active>
                        <Step.Content>
                            <Step.Title>Confirm Order</Step.Title>
                        </Step.Content>
                    </Step>
                </Step.Group>
            </Card.Content>
        </Card>
    );
};

export default Steps;