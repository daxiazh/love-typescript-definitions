/**
 * @link [File](https://love2d.org/wiki/File)
 */
declare interface File extends LoveObject {
    /**
     * Closes a file.
     *
     * @return success, Whether closing was successful.
     */
    close(): boolean;

    /**
     * Flushes any buffered written data in the file to the disk.
     *
     * @return success, Whether the file successfully flushed any buffered data to the disk.
     * @return err, The error string, if an error occurred and the file could not be flushed.
     * @tupleReturn
     */
    flush(): [boolean, string];

    /**
     * Gets the buffer mode of a file.
     *
     * @return mode, The current buffer mode of the file.
     * @return size, The maximum size in bytes of the file's buffer.
     * @tupleReturn
     */
    getBuffer(): [BufferMode, number];

    /**
     * Gets the filename that the File object was created with. If the file object
     * originated from the love.filedropped callback, the filename will be the full
     * platform-dependent file path.
     *
     * @return filename, The filename of the File.
     */
    getFilename(): string;

    /**
     * Gets the FileMode the file has been opened with.
     *
     * @return mode, The mode this file has been opened with.
     */
    getMode(): FileMode;

    /**
     * Returns the file size.
     *
     * @return size, The file size
     */
    getSize(): number;

    /**
     * Gets whether end-of-file has been reached.
     *
     * @return eof, Whether EOF has been reached.
     */
    isEOF(): boolean;

    /**
     * Gets whether the file is open.
     *
     * @return open, True if the file is currently open, false otherwise.
     */
    isOpen(): boolean;

    /**
     * Iterate over all the lines in a file
     *
     * @return iterator, The iterator (can be used in for loops)
     */
    lines(): Function;

    /**
     * Open the file for write, read or append.
     *
     *
     * If you are getting the error message "Could not set write directory", try
     * setting the save directory. This is done either with
     * love.filesystem.setIdentity or by setting the identity field in love.conf.
     *
     * @param mode The mode to open the file in.
     * @return success, True on success, false otherwise.
     */
    open(mode: FileMode): boolean;

    /**
     * Read a number of bytes from a file.
     *
     * @param bytes The number of bytes to read
     * @return contents, The contents of the read bytes.
     * @return size, How many bytes have been read.
     * @tupleReturn
     */
    read(bytes?: number): [string, number];

    /**
     * Seek to a position in a file.
     *
     * @param position The position to seek to.
     * @return success, Whether the operation was successful.
     */
    seek(position: number): boolean;

    /**
     * Sets the buffer mode for a file opened for writing or appending. Files with
     * buffering enabled will not write data to the disk until the buffer size limit
     * is reached, depending on the buffer mode.
     *
     * @param mode The buffer mode to use.
     * @param size The maximum size in bytes of the file's buffer.
     * @return success, Whether the buffer mode was successfully set.
     * @return errorstr, The error string, if the buffer mode could not be set and an error occurred.
     * @tupleReturn
     */
    setBuffer(mode: BufferMode, size?: number): [boolean, string];

    /**
     * Returns the position in the file.
     *
     * @return pos, The current position.
     */
    tell(): number;

    /**
     * Write data to a file.
     *
     * @param data The data to write.
     * @param size How many bytes to write.
     * @return success, Whether the operation was successful.
     */
    write(data: string, size?: number): boolean;

}