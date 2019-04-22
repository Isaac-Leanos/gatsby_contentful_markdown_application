module.exports = {
    siteMetadata: {
        title: 'Gatsby Bootcamp',
        author: 'Isaachar Leanos',
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful", // enables Contentful & access in graphQl 
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        "gatsby-plugin-sass", // enables use of SASS files.
        {
            resolve: "gatsby-source-filesystem", // enables use of files from file system.
            options: {
                name: "src",
                path: `${__dirname}/src/` 
            }
        },
        "gatsby-plugin-sharp", // nodejs image resizing module
        {
            resolve: "gatsby-transformer-remark", // Parses Markdown files using Remark.
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