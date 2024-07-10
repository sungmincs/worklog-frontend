import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader
} from "@mui/material";

export const DateList = () => {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", p: 2 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="h6" id="nested-list-subheader">
          Summary
        </ListSubheader>
      }
    >
      <ListItemButton sx={{ borderRadius: 2 }}>
        <ListItemText secondary="준비중입니다" />
      </ListItemButton>
    </List>
  );
};
