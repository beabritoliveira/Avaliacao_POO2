import  express  from "express";
import LanceRoutes from "./routes/LanceRoute";
import LeilaoRoutes from "./routes/LeilaoRoute";
import MainRouter from "./routes/MainRoute";
import UsuarioRoutes from "./routes/UsuarioRoutes";

const app = express();
app.use(express.json());
app.use(MainRouter);
app.use(UsuarioRoutes);
app.use(LanceRoutes);
app.use(LeilaoRoutes);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})