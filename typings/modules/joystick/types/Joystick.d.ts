/**
 * Represents a physical joystick.
 * @link [Joystick](https://love2d.org/wiki/Joystick)
 */
declare interface Joystick extends LoveObject {
    /**
     * Gets the direction of each axis.
     *
     * @return axisDir1, Direction of axis1.
     * @return axisDir2, Direction of axis2.
     * @return axisDirN, Direction of axisN.
     * @tupleReturn
     */
    getAxes(): [number, number, number];

    /**
     * Gets the direction of an axis.
     *
     * @param axis The index of the axis to be checked.
     * @return direction, Current value of the axis.
     */
    getAxis(axis: number): number;

    /**
     * Gets the number of axes on the joystick.
     *
     * @return axes, The number of axes available.
     */
    getAxisCount(): number;

    /**
     * Gets the number of buttons on the joystick.
     *
     * @return buttons, The number of buttons available.
     */
    getButtonCount(): number;

    /**
     * Gets a stable GUID unique to the type of the physical joystick which does not
     * change over time. For example, all Sony Dualshock 3 controllers in OS X have
     * the same GUID. The value is platform-dependent.
     *
     * @return guid, The Joystick type's OS-dependent unique identifier.
     */
    getGUID(): string;

    /**
     * Gets the direction of a virtual gamepad axis. If the Joystick isn't recognized
     * as a gamepad or isn't connected, this function will always return 0.
     *
     * @param axis The virtual axis to be checked.
     * @return direction, Current value of the axis.
     */
    getGamepadAxis(axis: GamepadAxis): number;

    /**
     * Gets the button, axis or hat that a virtual gamepad input is bound to.
     *
     * @param axisOrButton The virtual gamepad axis or button to get the binding for.
     * @return inputtype, The type of input the virtual gamepad axis is bound to.
     * @return inputindex, The index of the Joystick's button, axis or hat that the virtual gamepad axis is bound to.
     * @return hatdirection, The direction of the hat, if the virtual gamepad axis is bound to a hat. _nil/null_ otherwise.
     * @tupleReturn
     */
    getGamepadMapping(axisOrButton: GamepadAxis | GamepadButton): [JoystickInputType, number, JoystickHat | null];

    /**
     * Gets the direction of the Joystick's hat.
     *
     * @param hat The index of the hat to be checked.
     * @return direction, The direction the hat is pushed.
     */
    getHat(hat: number): JoystickHat;

    /**
     * Gets the number of hats on the joystick.
     *
     * @return hats, How many hats the joystick has.
     */
    getHatCount(): number;

    /**
     * Gets the joystick's unique identifier. The identifier will remain the same for
     * the life of the game, even when the Joystick is disconnected and reconnected,
     * but it will change when the game is re-launched.
     *
     * @return id, The Joystick's unique identifier. Remains the same as long as the game is running.
     * @return instanceid, Unique instance identifier. Changes every time the Joystick is reconnected. _nil/null_ if the Joystick is not connected.
     * @tupleReturn
     */
    getID(): [number, number | null];

    /**
     * Gets the name of the joystick.
     *
     * @return name, The name of the joystick.
     */
    getName(): string;

    /**
     * Gets the current vibration motor strengths on a Joystick with rumble support.
     *
     * @return left, Current strength of the left vibration motor on the Joystick.
     * @return right, Current strength of the right vibration motor on the Joystick.
     * @tupleReturn
     */
    getVibration(): [number, number];

    /**
     * Gets whether the Joystick is connected.
     *
     * @return connected, True if the Joystick is currently connected, false otherwise.
     */
    isConnected(): boolean;

    /**
     * Checks if a button on the Joystick is pressed.
     *
     *
     * LÖVE 0.9.0 had a bug which required the button indices passed to
     * Joystick:isDown to be 0-based instead of 1-based, for example button 1 would be
     * 0 for this function. It was fixed in 0.9.1.
     *
     * @param ... The index of a button to check.
     * @return anyDown, True if any supplied button is down, false if not.
     */
    isDown(...vararg: Array<number>): boolean;

    /**
     * Gets whether the Joystick is recognized as a gamepad. If this is the case, the
     * Joystick's buttons and axes can be used in a standardized manner across
     * different operating systems and joystick models via Joystick:getGamepadAxis and
     * related functions.
     *
     *
     * LÖVE automatically recognizes most popular controllers with a similar layout
     * to the Xbox 360 controller as gamepads, but you can add more with
     * love.joystick.setGamepadMapping.
     *
     * @return isgamepad, True if the Joystick is recognized as a gamepad, false otherwise.
     */
    isGamepad(): boolean;

    /**
     * Checks if a virtual gamepad button on the Joystick is pressed. If the Joystick
     * is not recognized as a Gamepad or isn't connected, then this function will
     * always return false.
     *
     * @param ... The gamepad button to check.
     * @return anyDown, True if any supplied button is down, false if not.
     */
    isGamepadDown(...vararg: Array<GamepadButton>): boolean;

    /**
     * Gets whether the Joystick supports vibration.
     *
     * @return supported, True if rumble / force feedback vibration is supported on this Joystick, false if not.
     */
    isVibrationSupported(): boolean;

    /**
     * Sets the vibration motor speeds on a Joystick with rumble support.
     *
     * @param left Strength of the left vibration motor on the Joystick. Must be in the range of [0, 1].
     * @param right Strength of the right vibration motor on the Joystick. Must be in the range of [0, 1].
     * @return success, True if the vibration was successfully applied, false if not.
     */
    setVibration(left: number, right: number): boolean;

    /**
     * Sets the vibration motor speeds on a Joystick with rumble support.
     *
     * @return success, True if the vibration was successfully disabled, false if not.
     */
    setVibration(): boolean;

    /**
     * Sets the vibration motor speeds on a Joystick with rumble support.
     *
     * @param left Strength of the left vibration motor on the Joystick. Must be in the range of [0, 1].
     * @param right Strength of the right vibration motor on the Joystick. Must be in the range of [0, 1].
     * @param duration The duration of the vibration in seconds. A negative value means infinite duration.
     * @return success, True if the vibration was successfully applied, false if not.
     */
    setVibration(left: number, right: number, duration: number): boolean;

}