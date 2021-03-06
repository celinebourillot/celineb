const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.get("/robots.txt", (req, res) => {
            const actualPage = "/robots.txt";
            app.render(req, res, actualPage);
        });

        server.get("/sitemap.xml", (req, res) => {
            const actualPage = "/sitemap.xml";
            app.render(req, res, actualPage);
        });

        server.get("/blog", (req, res) => {
            const actualPage = "/blog";
            app.render(req, res, actualPage);
        });

        server.get("/projects", (req, res) => {
            const actualPage = "/projects";
            app.render(req, res, actualPage);
        });

        server.get("/post/:slug", (req, res) => {
            const actualPage = "/post";
            const queryParams = { slug: req.params.slug, post_type: "post" };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/:slug", (req, res) => {
            const actualPage = "/page";
            const queryParams = { slug: req.params.slug };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/project/:slug", (req, res) => {
            const actualPage = "/project";
            const queryParams = { slug: req.params.slug, post_type: "project" };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/category/:slug", (req, res) => {
            const actualPage = "/category";
            const queryParams = { slug: req.params.slug };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/_preview/:id/:wpnonce", (req, res) => {
            const actualPage = "/preview";
            const queryParams = { id: req.params.id, wpnonce: req.params.wpnonce };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log("> Ready on http://localhost:3000");
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
