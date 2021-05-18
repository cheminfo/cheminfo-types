from glob import glob
import os
from jinja2 import Template, FileSystemLoader, Environment
from pathlib import Path

DIR_PATH = os.path.dirname(os.path.realpath(__file__))

ALL_FILES = glob(os.path.join(DIR_PATH, "./**/*.html"))


def render():
    templateLoader = FileSystemLoader(searchpath=DIR_PATH)
    templateEnv = Environment(loader=templateLoader)
    TEMPLATE_FILE = "base.html"
    template = templateEnv.get_template(TEMPLATE_FILE)

    links = []
    for file in ALL_FILES:
        path = file.replace(DIR_PATH, "")
        stem = Path(file).stem
        links.append((stem, "." + str(Path(path))))

    msg = template.render(linklist=links)

    with open(os.path.join(DIR_PATH, "index.html"), "w") as handle:
        handle.write(msg)


if __name__ == "__main__":
    render()
