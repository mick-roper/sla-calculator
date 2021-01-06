import React from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}))

const ServiceComponent: React.FC =(): React.ReactElement => {
    return (
        <Paper>
            <p>Hello, world!</p>
        </Paper>
    )
}

export const ServiceComponents: React.FC = (): React.ReactElement => {
    return (
        <Container fixed>
            <ServiceComponent></ServiceComponent>
            <ServiceComponent></ServiceComponent>
            <ServiceComponent></ServiceComponent>
        </Container>
    )
}