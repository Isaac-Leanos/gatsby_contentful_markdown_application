module.exports = {
    siteMetadata: {
        title: 'Gatsby Bootcamp',
        author: 'Isaachar Leanos',
    },
    plugins: [
        "gatsby-plugin-sass", // enables use of SASS files.
        {
            resolve: "gatsby-source-filesystem", // enables use of files from file system.
            options: {
                name: "src",
                path: `${__dirname}/src/` 
            }
        },
        "gatsby-plugin-sharp", // nodejs image resizing module
       // "gatsby-transformer-remark", // Parses Markdown files using Remark. Also, gatsby-remark-images & relatives-images need to be brought out of transformer-remark
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    "gatsby-remark-relative-images", // allow for relative paths from .md files
                    {
                        resolve: "gatsby-remark-images", // alow for the use of images in .md files
                        options: {
                            maxWidth: 1020,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ] 
}