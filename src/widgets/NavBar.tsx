import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";

export default () => {
    const items = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
    ];

    return (
        <Box>
            <Container>
                {items.map((item) => (
                    <Link to={item.to} key={item.to}>
                        <Button>{item.label}</Button>
                    </Link>
                ))}
            </Container>
        </Box>
    );
};
