/**\
 * Using a single image, draw any number of identical copies of the image using a single call to love.graphics.draw(). This can be used, for example, to draw repeating copies of a single background image with high performance.
 *
 * A SpriteBatch can be even more useful when the underlying image is a texture atlas (a single image file containing many independent images); by adding Quads to the batch, different sub-images from within the atlas can be drawn.
 * @link [SpriteBatch](https://love2d.org/wiki/SpriteBatch)
 */
declare interface SpriteBatch extends Drawable {
    /**
     * Add a sprite to the batch.
     *
     * @param x The position to draw the object (x-axis).
     * @param y The position to draw the object (y-axis).
     * @param r Orientation (radians).
     * @param sx Scale factor (x-axis).
     * @param sy Scale factor (y-axis).
     * @param ox Origin offset (x-axis).
     * @param oy Origin offset (y-axis).
     * @param kx Shear factor (x-axis).
     * @param ky Shear factor (y-axis).
     * @return id, An identifier for the added sprite.
     */
    add(x: number, y: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

    /**
     * Add a sprite to the batch.
     *
     * @param quad The Quad to add.
     * @param x The position to draw the object (x-axis).
     * @param y The position to draw the object (y-axis).
     * @param r Orientation (radians).
     * @param sx Scale factor (x-axis).
     * @param sy Scale factor (y-axis).
     * @param ox Origin offset (x-axis).
     * @param oy Origin offset (y-axis).
     * @param kx Shear factor (x-axis).
     * @param ky Shear factor (y-axis).
     * @return id, An identifier for the added sprite.
     */
    add(quad: Quad, x: number, y: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

    /**
     * Adds a layer of the SpriteBatch's Array Texture.
     * @param layerindex The index of the layer to use for this sprite.
     * @param x The position to draw the sprite (x-axis). (Default 0)
     * @param y The position to draw the sprite (y-axis). (Default 0)
     * @param r Orientation (radians). (Default 0)
     * @param sx Scale factor (x-axis). (Default 1)
     * @param sy Scale factor (y-axis). (Default sx)
     * @param ox Origin offset (x-axis). (Default 0)
     * @param oy Origin offset (y-axis). (Default 0)
     * @param kx Shearing factor (x-axis). (Default 0)
     * @param ky Shearing factor (y-axis). (Default 0)
     * @return spriteindex, The index of the added sprite, for use with SpriteBatch:set or SpriteBatch:setLayer.
     * @link [SpriteBatch:addLayer](https://love2d.org/wiki/SpriteBatch:addLayer)
     */
    addLayer(layerindex: number, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

    /**
     * Adds a layer of the SpriteBatch's Array Texture using the specified Quad.
     * @param layerindex The index of the layer to use for this sprite.
     * @param quad The subsection of the texture's layer to use when drawing the sprite.
     * @param x The position to draw the sprite (x-axis). (Default 0)
     * @param y The position to draw the sprite (y-axis). (Default 0)
     * @param r Orientation (radians). (Default 0)
     * @param sx Scale factor (x-axis). (Default 1)
     * @param sy Scale factor (y-axis). (Default sx)
     * @param ox Origin offset (x-axis). (Default 0)
     * @param oy Origin offset (y-axis). (Default 0)
     * @param kx Shearing factor (x-axis). (Default 0)
     * @param ky Shearing factor (y-axis). (Default 0)
     * @return spriteindex, The index of the added sprite, for use with SpriteBatch:set or SpriteBatch:setLayer.
     * @link [SpriteBatch:addLayer](https://love2d.org/wiki/SpriteBatch:addLayer)
     */
    addLayer(layerindex: number, quad: Quad, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

    /**
     * Adds a layer of the SpriteBatch's Array Texture using the specified Quad and Transform.
     * @param layerindex The index of the layer to use for this sprite.
     * @param quad The subsection of the texture's layer to use when drawing the sprite.
     * @param transform A transform object.
     * @return spriteindex, The index of the added sprite, for use with SpriteBatch:set or SpriteBatch:setLayer.
     * @link [SpriteBatch:addLayer](https://love2d.org/wiki/SpriteBatch:addLayer)
     */
    addLayer(layerindex: number, quad: Quad, transform: Transform): number;

    /**
     * Adds a layer of the SpriteBatch's Array Texture using the specified Transform.
     * @param layerindex The index of the layer to use for this sprite.
     * @param transform A transform object.
     * @return spriteindex, The index of the added sprite, for use with SpriteBatch:set or SpriteBatch:setLayer.
     * @link [SpriteBatch:addLayer](https://love2d.org/wiki/SpriteBatch:addLayer)
     */
    addLayer(layerindex: number, transform: Transform): number;

    /**
     * Attaches a per-vertex attribute from a Mesh onto this SpriteBatch, for use when
     * drawing. This can be combined with a Shader to augment a SpriteBatch with
     * per-vertex or additional per-sprite information instead of just having
     * per-sprite colors.
     *
     *
     * Each sprite in a SpriteBatch has 4 vertices in the following order: top-left,
     * bottom-left, top-right, bottom-right. The index returned by SpriteBatch:add
     * (and used by SpriteBatch:set) can used to determine the first vertex of a
     * specific sprite with the formula "1 + 4 * ( id - 1 )".
     *
     * @param name The name of the vertex attribute to attach.
     * @param mesh The Mesh to get the vertex attribute from.
     */
    attachAttribute(name: string, mesh: Mesh): void;

    /**
     * Removes all sprites from the buffer.
     *
     */
    clear(): void;

    /**
     * Immediately sends all new and modified sprite data in the batch to the graphics
     * card.
     *
     */
    flush(): void;

    /**
     * Gets the maximum number of sprites the SpriteBatch can hold.
     *
     * @return size, The maximum number of sprites the batch can hold.
     */
    getBufferSize(): number;

    /**
     * Gets the color that will be used for the next add and set operations.
     *
     *
     * If no color has been set with SpriteBatch:setColor or the current SpriteBatch
     * color has been cleared, this method will return _nil/null_.
     *
     * @return r, The red component (0-255).
     * @return g, The green component (0-255).
     * @return b, The blue component (0-255).
     * @return a, The alpha component (0-255).
     * @tupleReturn
     * @link [SpriteBatch:getColor](https://love2d.org/wiki/SpriteBatch:getColor)
     */
    getColor(): [number, number, number, number] | [null, null, null, null];

    /**
     * Gets the amount of sprites currently in the SpriteBatch.
     *
     * @return count, The amount of sprites currently in the batch.
     */
    getCount(): number;

    /**
     * Returns the Image or Canvas used by the SpriteBatch.
     *
     * @return texture, The Image or Canvas for the sprites.
     */
    getTexture(): Texture;

    /**
     * Changes a sprite in the batch. This requires the identifier returned by add and
     * addq.
     *
     * @param id The identifier of the sprite that will be changed.
     * @param x The position to draw the object (x-axis).
     * @param y The position to draw the object (y-axis).
     * @param r Orientation (radians).
     * @param sx Scale factor (x-axis).
     * @param sy Scale factor (y-axis).
     * @param ox Origin offset (x-axis).
     * @param oy Origin offset (y-axis).
     * @param kx Shear factor (x-axis).
     * @param ky Shear factor (y-axis).
     */
    set(id: number, x: number, y: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

    /**
     * Changes a sprite in the batch. This requires the identifier returned by add and
     * addq.
     *
     * @param id The identifier of the sprite that will be changed.
     * @param quad The quad used on the image of the batch.
     * @param x The position to draw the object (x-axis).
     * @param y The position to draw the object (y-axis).
     * @param r Orientation (radians).
     * @param sx Scale factor (x-axis).
     * @param sy Scale factor (y-axis).
     * @param ox Origin offset (x-axis).
     * @param oy Origin offset (y-axis).
     * @param kx Shear factor (x-axis).
     * @param ky Shear factor (y-axis).
     */
    set(id: number, quad: Quad, x: number, y: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

    /**
     * Sets the maximum number of sprites the SpriteBatch can hold. Existing sprites
     * in the batch (up to the new maximum) will not be cleared when this function is
     * called.
     *
     * @param size The new maximum number of sprites the batch can hold.
     */
    setBufferSize(size: number): void;

    /**
     * Sets the color that will be used for the next add and set operations. Calling
     * the function without arguments will clear the color.
     *
     *
     * In version [[0.9.2]] and older, the global color set with
     * love.graphics.setColor will not work on the SpriteBatch if any of the sprites
     * has its own color.
     *
     * @param r The amount of red.
     * @param g The amount of green.
     * @param b The amount of blue.
     * @param a The amount of alpha.
     */
    setColor(r: number, g: number, b: number, a?: number): void;

    /**
     * Sets the color that will be used for the next add and set operations. Calling
     * the function without arguments will clear the color.
     *
     *
     * In version [[0.9.2]] and older, the global color set with
     * love.graphics.setColor will not work on the SpriteBatch if any of the sprites
     * has its own color.
     *
     */
    setColor(): void;

    /**
     * Restricts the drawn sprites in the SpriteBatch to a subset of the total.
     *
     * @param start The index of the first sprite to draw. Index 1 corresponds to the first sprite added with SpriteBatch:add.
     * @param count The number of sprites to draw.
     */
    setDrawRange(start: number, count: number): void;

    /**
     * Restricts the drawn sprites in the SpriteBatch to a subset of the total.
     *
     */
    setDrawRange(): void;

    /**
     * Changes the sprite in the SpriteBatch.
     * @param spriteindex The index of the existing sprite to replace.
     * @param layerindex The index of the layer in the Array Texture to use for this sprite.
     * @param x The position to draw the sprite (x-axis). (Default 0)
     * @param y The position to draw the sprite (y-axis). (Default 0)
     * @param r Orientation (radians). (Default 0)
     * @param sx Scale factor (x-axis). (Default 1)
     * @param sy Scale factor (y-axis). (Default sx)
     * @param ox Origin offset (x-axis). (Default 0)
     * @param oy Origin offset (y-axis). (Default 0)
     * @param kx Shearing factor (x-axis). (Default 0)
     * @param ky Shearing factor (y-axis). (Default 0)
     * @link [SpriteBatch:setLayer](https://love2d.org/wiki/SpriteBatch:setLayer)
     */
    setLayer(spriteindex: number, layerindex: number, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

    /**
     * Changes the sprite in the SpriteBatch.
     * @param spriteindex The index of the existing sprite to replace.
     * @param layerindex The index of the layer in the Array Texture to use for this sprite.
     * @param quad The subsection of the texture's layer to use when drawing the sprite.
     * @param x The position to draw the sprite (x-axis). (Default 0)
     * @param y The position to draw the sprite (y-axis). (Default 0)
     * @param r Orientation (radians). (Default 0)
     * @param sx Scale factor (x-axis). (Default 1)
     * @param sy Scale factor (y-axis). (Default sx)
     * @param ox Origin offset (x-axis). (Default 0)
     * @param oy Origin offset (y-axis). (Default 0)
     * @param kx Shearing factor (x-axis). (Default 0)
     * @param ky Shearing factor (y-axis). (Default 0)
     * @link [SpriteBatch:setLayer](https://love2d.org/wiki/SpriteBatch:setLayer)
     */
    setLayer(spriteindex: number, layerindex: number, quad: Quad, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

    /**
     * Adds a layer of the SpriteBatch's Array Texture using the specified Quad and Transform.
     * @param spriteindex The index of the existing sprite to replace.
     * @param layerindex The index of the layer in the Array Texture to use for this sprite.
     * @param transform A transform object.
     * @link [SpriteBatch:setLayer](https://love2d.org/wiki/SpriteBatch:setLayer)
     */
    setLayer(spriteindex: number, layerindex: number, transform: Transform): void;

    /**
     * Adds a layer of the SpriteBatch's Array Texture using the specified Quad and Transform.
     * @param spriteindex The index of the existing sprite to replace.
     * @param layerindex The index of the layer in the Array Texture to use for this sprite.
     * @param quad The subsection of the texture's layer to use when drawing the sprite.
     * @param transform A transform object.
     * @link [SpriteBatch:setLayer](https://love2d.org/wiki/SpriteBatch:setLayer)
     */
    setLayer(spriteindex: number, layerindex: number, quad: Quad, transform: Transform): void;

    /**
     * Replaces the Image or Canvas used for the sprites.
     *
     * @param texture The new Image or Canvas to use for the sprites.
     */
    setTexture(texture: Texture): void;

}