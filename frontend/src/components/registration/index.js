import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import People from './people';
import HealthPlace from './health-place';

class Registration extends React.Component {
    render() {
        return (
            <Grid container direction="row" spacing={2}>
                <Grid item md={4}>
                    <Card>
                        <CardHeader title="People"></CardHeader>
                    </Card>
                </Grid>

                <Grid item md={4}>
                    <Card>
                        <CardHeader title="Users"></CardHeader>
                    </Card>
                </Grid>

                <Grid item md={4}>
                    <Card>
                        <CardHeader title="Health Place"></CardHeader>
                    </Card>
                </Grid>

                <Grid item md={4}>
                    <Card>
                        <CardHeader title="Cities"></CardHeader>
                    </Card>
                </Grid>

                <Grid item md={4}>
                    <Card>
                        <CardHeader title="Procedures"></CardHeader>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export { Registration, People, HealthPlace };