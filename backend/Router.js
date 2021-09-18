
class Router {
    constructor(app, db) {
        this.getProfiles(app, db);
        this.getVideos(app, db);
    }

    getProfiles(app, db) {
        app.post("/getProfiles", (req, res) => {
            db.query("SELECT * FROM members ORDER BY ordering ASC",  (err, data, fields) => {
                if (data) {
                    console.log("here");
                    res.json({
                        success: true,
                        data: data
                    })

                    return true;
                } else {
                    res.json({
                        success: false
                    })
                    console.log("fail");
                }
            });

        })
    }

    getVideos(app, db) {
        app.post("/getVideos", (req, res) => {
            db.query("SELECT * FROM videos ORDER BY datePublish DESC",  (err, data, fields) => {
                if (data) {
                    console.log("herevids");
                    res.json({
                        success: true,
                        data: data
                    })

                    return true;
                } else {
                    res.json({
                        success: false
                    })
                    console.log("failvids");
                }
            });

        })
    }
}

module.exports = Router;