import { TodoList } from "@/features/todo/list";
import { AddItemForm } from "@/widgets/addItemForm";
import { Layout } from "@/widgets/layout";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Layout>
      <Layout.Lsb />
      <Layout.Content>
        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          sx={{
            p: 6
          }}
        >
          <TodoList />
          <AddItemForm />
        </Box>
      </Layout.Content>
    </Layout>
  );
};
