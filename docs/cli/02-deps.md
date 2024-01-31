# sqrl deps

The `sqrl deps` command loads all the packages specified in the **packages** section of `squirrels.yml`.

For instance, suppose we have the following in the `squirrels.yml` file.

```yaml
packages:
    - git: https://github.com/org/myrepo.git
      revision: v0.1.0       ## tag or branch or commit hash
      directory: custom_name ## optional if same name as git repo
```

Running `sqrl deps` will create a new `sqrl_packages/` folder with subfolder `custom_name/`. Inside `custom_name/` is the contents of the `https://github.com/org/myrepo.git` repo at the `v0.1.0` git tag.

Then, you can import python modules or Jinja macros defined in the `sqrl_packages/` folder.

Note that the `sqrl_packages/` folder is in the `.gitignore` file.
