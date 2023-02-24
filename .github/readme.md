# Vercel-Express-MongoDB

> REST table template

| URL           | Path   | Method        | Action   | Description                           |
| ------------- | ------ | ------------- | -------- | ------------------------------------- |
| `/resource`   | `/`    | `GET`         | #index   | List all items of `resource`          |
| `/resource`   | `/`    | `POST`        | #create  | Create new `resource` in the database |
| `/resource/1` | `/:id` | `GET`         | #show    | Show a single `resource`              |
| `/resource/1` | `/:id` | `PATCH`/`PUT` | #update  | Update `resource` in the database     |
| `/resource/1` | `/:id` | `DELETE`      | #destroy | Delete a `resource`                   |

---
[Template Documentation](https://github.com/metruzanca/ga-vercel-demo)