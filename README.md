# Alfonso Magallon: consulting website

Live at **https://almagall.github.io/**. Built with MkDocs Material, starting from the datalumina/mkdocs-website-template.

## How it publishes
Every push to `main` builds the site and publishes it through GitHub Actions (`.github/workflows/deploy.yml`). Check progress under the repository's **Actions** tab; a green tick means it is live, usually within two minutes.

## Where things live
| What | File |
|---|---|
| Homepage text and layout | `overrides/home.html` |
| Case studies page | `docs/portfolio/index.md` |
| A case study | `docs/portfolio/projects/*.md` |
| Blog posts | `docs/blog/posts/*.md` |
| Colors, fonts, spacing | `docs/stylesheets/extra.css` |
| Menu, links, settings | `mkdocs.yml` |
| Headshot | `docs/assets/alfonso-headshot.jpg` |

## Add a blog post
Create `docs/blog/posts/my-post.md`:

    ---
    date: 2026-11-01
    authors:
      - alfonso
    categories:
      - Power BI
    ---

    # Post title

    Opening paragraph shown on the blog list.

    <!-- more -->

    The rest of the post.

Delete `docs/blog/posts/sample-post.md` once you have a real post.

## Add a case study
Copy `docs/portfolio/projects/schedule-forecasting-model.md`, edit it, then add it to the `nav:` list in `mkdocs.yml` and a card for it in `docs/portfolio/index.md`.

## Preview on your computer
    pip install -r requirements.txt
    mkdocs serve
Then open http://localhost:8000. (Mac users may also need `brew install cairo freetype libffi libjpeg libpng zlib pngquant` for the social preview images; Docker users can run `./start_server.sh`.)

## Custom domain later
Add a file `docs/CNAME` containing the domain (for example `alfonsomagallon.com`), set `site_url` in `mkdocs.yml`, and follow GitHub's custom domain guide.
