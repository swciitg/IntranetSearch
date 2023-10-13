
import AdminBro from "admin-bro";
import AdminBroExpress from "admin-bro-expressjs";
import AdminBroMongoose from "admin-bro-mongoose";
import { contentModel } from "./models/contentModel.js";

AdminBro.registerAdapter(AdminBroMongoose);
const getAdminRouter = (db, mainRouter) => {
  //Check admin access
  const canModifyUsers = ({ currentAdmin }) => currentAdmin;
  const adminBro = new AdminBro({
    databases: [db],
    branding: {
      companyName: "Intranet Search Engine",
      softwareBrothers: false,
      logo: "https://swc.iitg.ac.in/hab/images/svg/swc-logo.svg",
    },
    resources: [
      {
        resource: contentModel,
        options: {
          properties: {
            _id: {
              isTitle: true,
            },
          },
        },
      },
      
    ],
    rootPath: `/admin`,
    loginPath: `/admin/login`,
    logoutPath: `/admin/logout`,
  });

  // Build and use a router which will handle all AdminBro routes
  const router = AdminBroExpress.buildAuthenticatedRouter(
    adminBro,
    {
      authenticate: async (email, password) => {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPass = process.env.ADMIN_PASS;
        if (email === adminEmail && adminPass === password) {
          return { email, role: "admin" };
        }
        // const user = await Admin.findOne({ "admin.email": email });

        // if (user) {
        //   const matched = await bcrypt.compare(
        //     password,
        //     user.admin?.encryptedPassword
        //   );
        //   if (matched) {
        //     return { email, role: "admin" };
        //   }
        // }
        return false;
      },
    //   cookiePassword: process.env.JWT_SECRET,
    },
    null,
    {
      secret: process.env.SESSION_SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
      resave: true,
      saveUninitialized: true,
    }
  );

  return router;
};

export default getAdminRouter;
