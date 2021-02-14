import configs from "../../../configs";
import { error } from "../../../helpers/response";
import { decodeToken } from "../../../services/jwt";
import { repo } from "../repo";

export const isLoggedIn = async (req: any, res:any, next: any) => {
    try {
        if(!req.header("Authorization")) throw "Authorization header is missing";
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded: any = decodeToken(token, configs.AUTH_TOKEN);
        const user = await repo.getOne({username: decoded.username})
        req.body.user = user
        if(user) next()
        else res.status(400).json(error("User Not Found",400))
      } catch (err) {
        res.status(401).json(error(err,401));
      }
}