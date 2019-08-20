declare module "love.filesystem" {
    /**
     * The type of a file.
     * @link [FileType](https://love2d.org/wiki/FileType)
     */
    export type FileType = "file" | "directory" | "symlink" | "other";
}
