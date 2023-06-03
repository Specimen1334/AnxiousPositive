//=============================================================================
// VisuStella MZ - Button Trigger Events
// VisuMZ_3_ButtonTriggerEvts.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ButtonTriggerEvts = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ButtonTriggerEvts = VisuMZ.ButtonTriggerEvts || {};
VisuMZ.ButtonTriggerEvts.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.03] [ButtonTriggerEvts]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Main_Page
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you, the game dev, the setup events that can be remotely
 * triggered by certain button presses even if the player character is across
 * the map. This can be used in a number of ways such as setting up specific
 * interactions or even reproducing a point and click navigation style.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Setup events that can remotely trigger upon the player pressing specific
 *   keyboard buttons. The player character doesn't need to be near the event.
 * * Setup which buttons will trigger the event. These buttons range from the
 *   directional arrows, the OK, cancel, Page Up, Page Down, CTRL, Shift, and
 *   Tab buttons on the keyboard.
 * * Automatically setup Click Triggers and icons based on the button assigned.
 * * When multiple events are assigned to a button key, the player will enter a
 *   spotlight mode to help determine which event the player wishes to interact
 *   with relative to the key press.
 * * Use custom settings or images for the spotlight mode.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_1_EventsMoveCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Event-Related Notetags and Comment Tags ===
 * 
 * ---
 *
 * <Trigger Button: button>
 * <Trigger Buttons: button, button, button>
 *
 * - Used for: Event Notetags and Comment Tags
 * - Allows the event to remotely trigger upon the player pressing a specific
 *   keyboard button.
 *   - The event's Trigger condition must be either "Action Button",
 *     "Player Touch", or "Event Touch".
 *   - This does not work with "Autorun" or "Parallel".
 * - Insert the tag inside the Notebox to make the Button Trigger apply to ALL
 *   of the event's pages.
 * - Insert the tag inside of a Comment to make the Button Trigger apply ONLY
 *   to the specific event pages that have those comments on them.
 * - Replace 'button' with any of the following buttons (remove quotes):
 *   - "Down", "Left", "Right", "Up"
 *   - "OK", "Cancel", "PageUp", "PageDown",
 *   - "Control", "Shift", "Tab"
 *   - Typing in a button wrong (such as adding a space to "Page Up") will
 *     yield no results.
 *   - The "Cancel" button trigger will prevent the Main Menu from being called
 *     when pressed with the Keyboard, but it will NOT prevent the Main Menu
 *     from being called with mouse buttons or touch controls.
 * - Insert multiple buttons separated by commas to allow for multiple keyboard
 *   buttons to trigger them.
 * 
 * Examples:
 * 
 * <Trigger Button: OK>
 * <Trigger Button: Left, Down>
 * <Trigger Button: Up, Right>
 * <Trigger Button: PageUp, PageDown>
 *
 * ---
 *
 * <No Auto Trigger Icon>
 *
 * - Used for: Event Notetags and Comment Tags
 * - Prevents icons from being automatically assigned to the event if it is
 *   assigned a Trigger Button.
 *
 * ---
 *
 * <No Auto Click Trigger>
 *
 * - Used for: Event Notetags and Comment Tags
 * - Prevents click trigger from being automatically assigned to the event if
 *   it is assigned a Trigger Button.
 *
 * ---
 * 
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Seal Input Move>
 *
 * - Used for: Map Notetags
 * - Prevents the player from being able to use directional inputs and touch
 *   navigation on this specific map.
 * - If this notetag is not used, the setting will default to whatever is set
 *   up in the Plugin Parameters > Auto QOL Settings > Auto <Seal Input Move>
 *   setting.
 *
 * ---
 *
 * <No Seal Input Move>
 *
 * - Used for: Map Notetags
 * - Allows the player to be able to use directional inputs and utilize touch
 *   navigation on this specific map.
 * - If this notetag is not used, the setting will default to whatever is set
 *   up in the Plugin Parameters > Auto QOL Settings > Auto <Seal Input Move>
 *   setting.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Button Trigger Events
 * - Enable/disable Button Trigger Events from activating.
 *
 *   Enable/Disable?:
 *   - Enables Button Trigger Events and allows them to activate.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Automatic Quality of Life Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you to quickly adjust and streamline your game
 * to utilize the Button Trigger Events in a more efficient manner.
 *
 * ---
 *
 * General
 * 
 *   Auto <Seal Input Move>:
 *   - Seal off input movement by default for every map?
 *   - Player will be unable to with the keyboard or with the mouse if enabled.
 * 
 *   Auto <Click Trigger>:
 *   - Add <Click Trigger> for events with Trigger Buttons?
 *   - Player can click the events and automatically trigger them.
 *
 * ---
 *
 * Auto <Icon: x>
 * 
 *   Auto-Synchronize?:
 *   - Automatically synchronize with VisuMZ_0_CoreEngine?
 *   - Will change from Keyboard to Controller icons on switch.
 *   - Does NOT take priority over events that already have <Icon: x>.
 *   - Does NOT take priority over specified icons in the Plugin Parameters.
 * 
 *   Direction:
 * 
 *     Down:
 *     Left:
 *     Right:
 *     Up:
 *     - Which icon do you wish to use for this button?
 *     - Use 0 for no changes.
 *     - If a Trigger Button is discovered using this key(s), this icon will
 *       be automatically assigned to the event.
 * 
 *   Actions:
 * 
 *     OK / Confirm:
 *     Menu / Cancel:
 *     Page Up:
 *     Page Down:
 *     - Which icon do you wish to use for this button?
 *     - Use 0 for no changes.
 *     - If a Trigger Button is discovered using this key(s), this icon will
 *       be automatically assigned to the event.
 * 
 *   Other:
 * 
 *     CTRL:
 *     Shift:
 *     Tab:
 *     - Which icon do you wish to use for this button?
 *     - Use 0 for no changes.
 *     - If a Trigger Button is discovered using this key(s), this icon will
 *       be automatically assigned to the event.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Spotlight Settings
 * ============================================================================
 *
 * If multiple events are assigned the same Trigger Button, then Spotlight Mode
 * will occur. The player character and all other events will freeze in place,
 * while the player selects which event to trigger.
 * 
 * Spotlight Mode will only enlist the events that are on the player's screen
 * and will filter out the ones that aren't close. If there aren't any near the
 * player's screen, then the one with the lowest event ID will automatically
 * trigger. Otherwise, the player will select from the events visible on the
 * screen close to the player.
 * 
 * You can assign a custom graphic for the spotlight. However, if no custom
 * graphic is used, an auto-generated one will be used instead. The generated
 * spotlight is a simplistic darkened screen with a light in the middle.
 *
 * ---
 *
 * Custom Graphic
 * 
 *   Filename:
 *   - Insert a filename here to use a custom graphic.
 *   - Leave empty to not use. Located in img/system/
 * 
 *   Anchor X:
 *   - Custom anchor X value for the custom spotlight.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 *   - This does NOT apply to the auto-generated spotlight.
 * 
 *   Anchor Y:
 *   - Custom anchor Y value for the custom spotlight.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 *   - This does NOT apply to the auto-generated spotlight.
 * 
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the custom spotlight?
 *   - This does NOT apply to the auto-generated spotlight.
 *
 * ---
 *
 * Generated Image
 * 
 *   Radius:
 *   - If no custom graphic is used, generate a spotlight bitmap.
 *   - This determines the radius.
 *
 * ---
 *
 * Fade Effect
 * 
 *   Target Opacity:
 *   - What is the target opacity when the spotlight is visible?
 *   - 1 - More Transparent
 *   - 255 - Max Opaque
 * 
 *   Fade Speed:
 *   - What speed does the opacity fade in and out at?
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Arisu
 * * Olivia
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.03: December 15, 2022
 * * Compatibility Update!
 * ** Compatibility update with version RPG Maker MZ 1.6.0. This is not final
 *    as this was only tested on the open beta version of 1.6.0.
 * 
 * Version 1.02: November 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter by Arisu.
 * *** Automatic QOL Settings > Auto <Icon: x> > Auto-Synchronize?
 * **** Automatically synchronize with VisuMZ_0_CoreEngine?
 * **** Will change from Keyboard to Controller icons on switch.
 * **** Does NOT take priority over events that already have <Icon: x>.
 * **** Does NOT take priority over specified icons in the Plugin Parameters.
 * 
 * Version 1.01: February 3, 2022
 * * Documentation Update!
 * ** Added text for "Plugin Parameters: Spotlight Settings"
 * *** Spotlight Mode will only enlist the events that are on the player's
 *     screen and will filter out the ones that aren't close. If there aren't
 *     any near the player's screen, then the one with the lowest event ID will
 *     automatically trigger. Otherwise, the player will select from the events
 *     visible on the screen close to the player.
 * * Feature Update!
 * ** Updated the handling of event triggers for multiple events that may not
 *    appear on the player's screen. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.00 Official Release Date: February 9, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableButtonTriggerEvtsMenu
 * @text System: Enable Button Trigger Events
 * @desc Enable/disable Button Trigger Events from activating.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables Button Trigger Events and allows them to activate.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ButtonTriggerEvts
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Auto:struct
 * @text Automatic QOL Settings
 * @type struct<Auto>
 * @desc Automatic Quality of Life settings.
 * @default {"AutoSealedMovement:eval":"false","AutoClickTrigger:eval":"true","AutoIcon":"","AutoSynchronize:eval":"true","AutoIconDirection":"","AutoIconDOWN:num":"349","AutoIconLEFT:num":"346","AutoIconRIGHT:num":"347","AutoIconUP:num":"348","AutoIconActions":"","AutoIconOK:num":"345","AutoIconCANCEL:num":"343","AutoIconPAGEUP:num":"336","AutoIconPAGEDOWN:num":"342","AutoIconOutter":"","AutoIconCONTROL:num":"0","AutoIconSHIFT:num":"0","AutoIconTAB:num":"0"}
 *
 * @param Spotlight:struct
 * @text Spotlight Settings
 * @type struct<Spotlight>
 * @desc Settings used for the Spotlight Mode.
 * @default {"Custom":"","Filename:str":"","AnchorX:num":"0.5","AnchorY:num":"0.5","BlendMode:num":"0","Bitmap":"","Radius:num":"72","Fading":"","Opacity:num":"160","FadeSpeed:num":"8"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Automatic Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Auto:
 *
 * @param AutoSealedMovement:eval
 * @text Auto <Seal Input Move>
 * @parent Auto
 * @type boolean
 * @on Seal by Default
 * @off Normal Movement
 * @desc Seal off input movement by default for every map?
 * @default false
 *
 * @param AutoClickTrigger:eval
 * @text Auto <Click Trigger>
 * @parent Auto
 * @type boolean
 * @on Add <Click Trigger>
 * @off Do Not Add
 * @desc Add <Click Trigger> for events with Trigger Buttons?
 * @default true
 *
 * @param AutoIcon
 * @text Auto <Icon: x>
 * @parent Auto
 *
 * @param AutoSynchronize:eval
 * @text Auto-Synchronize?
 * @parent AutoIcon
 * @type boolean
 * @on Auto-Synchronize
 * @off Don't Synchronize
 * @desc Automatically synchronize with VisuMZ_0_CoreEngine?
 * Will change from Keyboard to Controller icons on switch.
 * @default true
 * 
 * @param AutoIconDirection
 * @text Direction
 * @parent AutoIcon
 *
 * @param AutoIconDOWN:num
 * @text Down
 * @parent AutoIconDirection
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconLEFT:num
 * @text Left
 * @parent AutoIconDirection
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconRIGHT:num
 * @text Right
 * @parent AutoIconDirection
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconUP:num
 * @text Up
 * @parent AutoIconDirection
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 * 
 * @param AutoIconActions
 * @text Actions
 * @parent AutoIcon
 *
 * @param AutoIconOK:num
 * @text OK / Confirm
 * @parent AutoIconActions
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconCANCEL:num
 * @text Menu / Cancel
 * @parent AutoIconActions
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconPAGEUP:num
 * @text Page Up
 * @parent AutoIconActions
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconPAGEDOWN:num
 * @text Page Down
 * @parent AutoIconActions
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 * 
 * @param AutoIconOutter
 * @text Other
 * @parent AutoIcon
 *
 * @param AutoIconCONTROL:num
 * @text CTRL
 * @parent AutoIconOutter
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconSHIFT:num
 * @text Shift
 * @parent AutoIconOutter
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 * @param AutoIconTAB:num
 * @text Tab
 * @parent AutoIconOutter
 * @desc Which icon do you wish to use for this button?
 * Use 0 for no changes.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Spotlight Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Spotlight:
 *
 * @param Custom
 * @text Custom Graphic
 *
 * @param Filename:str
 * @text Filename
 * @parent Custom
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Insert a filename here to use a custom graphic.
 * Leave empty to not use. Located in img/system/
 * @default 
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent Custom
 * @desc Custom anchor X value for the custom spotlight.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent Custom
 * @desc Custom anchor Y value for the custom spotlight.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Custom
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the custom spotlight?
 * @default 0
 *
 * @param Bitmap
 * @text Generated Image
 *
 * @param Radius:num
 * @text Radius
 * @parent Bitmap
 * @type number
 * @min 1
 * @desc If no custom graphic is used, generate a spotlight bitmap. This determines the radius.
 * @default 72
 *
 * @param Fading
 * @text Fade Effect
 *
 * @param Opacity:num
 * @text Target Opacity
 * @parent Fading
 * @type number
 * @min 1
 * @max 255
 * @desc What is the target opacity when the spotlight is visible?
 * 1 - More Transparent; 255 - Max Opaque
 * @default 160
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent Fading
 * @type number
 * @min 1
 * @max 255
 * @desc What speed does the opacity fade in and out at?
 * @default 8
 *
 */
//=============================================================================

const _0xe014fc=_0x5618;function _0x5618(_0x507de2,_0xf516ef){const _0x332d33=_0x332d();return _0x5618=function(_0x5618e3,_0x326cf7){_0x5618e3=_0x5618e3-0x1ef;let _0x153dcc=_0x332d33[_0x5618e3];return _0x153dcc;},_0x5618(_0x507de2,_0xf516ef);}(function(_0x51f3e4,_0x6514a0){const _0xf78646=_0x5618,_0x55ee5a=_0x51f3e4();while(!![]){try{const _0x37568f=parseInt(_0xf78646(0x28b))/0x1*(-parseInt(_0xf78646(0x268))/0x2)+-parseInt(_0xf78646(0x205))/0x3+parseInt(_0xf78646(0x2cd))/0x4+parseInt(_0xf78646(0x2a2))/0x5*(parseInt(_0xf78646(0x263))/0x6)+-parseInt(_0xf78646(0x229))/0x7*(parseInt(_0xf78646(0x210))/0x8)+parseInt(_0xf78646(0x2bd))/0x9*(-parseInt(_0xf78646(0x22e))/0xa)+parseInt(_0xf78646(0x299))/0xb;if(_0x37568f===_0x6514a0)break;else _0x55ee5a['push'](_0x55ee5a['shift']());}catch(_0x6f92a){_0x55ee5a['push'](_0x55ee5a['shift']());}}}(_0x332d,0x796b5));var label=_0xe014fc(0x27e),tier=tier||0x0,dependencies=[_0xe014fc(0x285)],pluginData=$plugins[_0xe014fc(0x29e)](function(_0x280f21){const _0x4c79ac=_0xe014fc;return _0x280f21[_0x4c79ac(0x28a)]&&_0x280f21[_0x4c79ac(0x26d)][_0x4c79ac(0x27c)]('['+label+']');})[0x0];function _0x332d(){const _0x34473c=['Scene_Boot_loadSystemImages','isButtonTriggerEvent','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Spriteset_Map_update','clearButtonTriggerEventMultiple','toLowerCase','AutoIcon%1','1454607YuOjbD','AnchorY','_character','customBlendMode','AutoSealedMovement','_gamepadType','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','format','_buttonTriggerEventTargetIndex','toUpperCase','isSceneChangeOk','8HkTyFR','AsUiQ','initialize','onButtonTriggerEventSpotlightInputDir','setupPageSettings','setupStartingMapEvent','isNearThePlayerScreen','ARRAYSTR','getEventIconIndex','split','initButtonTriggerEventSettings','quyKs','Scene_Map_isSceneChangeOk','_buttonTriggerEventsEnabled','Enable','hasClickTrigger','NoSealMovement','#ffffff','updateButtonTriggerEventSpotlightInput','nQgyq','indexOf','tileWidth','shift','AbNos','_customModified','2524151oBjcNa','qJeiy','isTriggered','prototype','Game_Event_hasClickTrigger','15940gWFlRR','page','AutoClickTrigger','registerCommand','start','JrScI','VisuMZ_0_CoreEngine','_cached_ButtonTriggerEvts_Spotlight','Spriteset_Map_createLowerLayer','#000000','FUNC','Scene_Map_onMapTouch','OaMyy','ConvertParams','clear','Filename','BUTTON_TRIGGER_EVENT_AUTO_SYNCHRONIZE','EVAL','call','kqsPJ','list','Sprite_Character_getEventIconIndex','updateButtonTriggerEventSpotlightPosition','toString','updateSelfMovement','isButtonTriggerEventSpotlightMode','anchor','Game_Event_updateSelfMovement','constructor','uHewY','AnchorX','playCancel','setupEventButtonTriggerEventList','canStartLocalEvents','_erased','_antiAutoButtonTriggerClickTrigger','return\x200','HysiH','_triggerButtonKeys','CrijP','customAnchorX','left','onButtonTriggerEventSpotlightOk','Opacity','_lastButtonTriggerEvents','remove','filename','BUTTON_TRIGGER_AUTO_CLICK_TRIGGER','tileHeight','BgcZb','_buttonTriggerEventTargets','setupButtonTriggerEventNotetags','ARRAYFUNC','12JkKtng','idGdV','Sprite_Character_isAllowCharacterTilt','jSQJz','isSceneMap','1550490eoTYTE','updateButtonTriggerEventSpotlightSelect','loadSystem','hasButtonTriggerKey','abs','description','_autoButtonTriggerEventIcon','TriggerButtons','cancel','ceil','radius','name','getSelectedButtonTriggerEvent','PnLMg','Game_Event_clearPageSettings','XbMiK','Usmqy','push','event','bitmap','includes','blendMode','ButtonTriggerEvts','IJIZY','kIvgd','screenX','updateButtonTriggerEventSpotlightSprite','opacity','Sktnu','VisuMZ_1_EventsMoveCore','SealMovement','isRepeated','exit','FadeSpeed','status','1RUuCCe','isAllowCharacterTilt','deltaXFrom','setButtonTriggerEventEnabled','addChild','QyBGU','RegExp','findTargetSprite','moveByInput','BUTTON_TRIGGER_EVENTS_DEFAULT_SEALED_MOVEMENT','events','ARRAYNUM','tCgoq','EaUxD','20711438OgigGC','onMapTouch','_scene','BUTTON_TRIGGER_EVENT_SPOTLIGHT_SETTINGS','loadSystemImages','filter','clearPageSettings','tab','trim','129405BAOjmA','hasSealedMovement','setupEventButtonTrigger','setupButtonTriggerEventMultiple','eventId','note','down','Auto','width','checkButtonTriggerEventStringTags','Game_System_initialize','FoHCC','getButtonTriggerEventKeyIconIndex','min','Spotlight','max','match','GetCoreEngineButtonKeyIcon','code','JSON','cUHAG','right','isMoving','setupButtonTriggerEventSettings','STRUCT','updateMove','createLowerLayer','2106vTLoIi','advanced','NoAutoClickTrigger','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_buttonTriggerEventSpotlightSprite','sort','BlendMode','Game_CharacterBase_updateMove','PsfQF','update','jbUlN','isFurnitureSystemMode','playCursor','fillRect','buttonTriggerEventSpotlight','kmXzA','2225664Qehvqt','Scene_Map_isMenuEnabled','cqcXg','isMenuEnabled','fadeSpeed','parameters','Game_Player_moveByInput','Game_Event_setupPageSettings','map','NoAutoTriggerIcon','screenHeight','pageup','peOJi','drawCircle','Game_Player_canStartLocalEvents','ARRAYEVAL','parse','createButtonTriggerEventSpotlightSprite','setupButtonTriggerEventCommentTags','QEDvp','deltaYFrom','VisuMZ_2_FurnitureSystem','updateButtonTriggerEventSpotlightOpacity','lwVCd','isButtonTriggerEventEnabled','WyUFY','screenWidth','Settings','length','distance','dir4'];_0x332d=function(){return _0x34473c;};return _0x332d();}VisuMZ[label][_0xe014fc(0x1fa)]=VisuMZ[label][_0xe014fc(0x1fa)]||{},VisuMZ[_0xe014fc(0x23b)]=function(_0x534c2c,_0xfc65d){const _0x117545=_0xe014fc;for(const _0x513c13 in _0xfc65d){if(_0x513c13[_0x117545(0x2b2)](/(.*):(.*)/i)){const _0x246d3a=String(RegExp['$1']),_0x34f19c=String(RegExp['$2'])['toUpperCase']()[_0x117545(0x2a1)]();let _0x6afa30,_0x4155ba,_0x2f9ef5;switch(_0x34f19c){case'NUM':_0x6afa30=_0xfc65d[_0x513c13]!==''?Number(_0xfc65d[_0x513c13]):0x0;break;case _0x117545(0x296):_0x4155ba=_0xfc65d[_0x513c13]!==''?JSON['parse'](_0xfc65d[_0x513c13]):[],_0x6afa30=_0x4155ba[_0x117545(0x2d5)](_0x32d945=>Number(_0x32d945));break;case _0x117545(0x23f):_0x6afa30=_0xfc65d[_0x513c13]!==''?eval(_0xfc65d[_0x513c13]):null;break;case _0x117545(0x2dc):_0x4155ba=_0xfc65d[_0x513c13]!==''?JSON['parse'](_0xfc65d[_0x513c13]):[],_0x6afa30=_0x4155ba[_0x117545(0x2d5)](_0x19a4db=>eval(_0x19a4db));break;case _0x117545(0x2b5):_0x6afa30=_0xfc65d[_0x513c13]!==''?JSON[_0x117545(0x1ef)](_0xfc65d[_0x513c13]):'';break;case'ARRAYJSON':_0x4155ba=_0xfc65d[_0x513c13]!==''?JSON[_0x117545(0x1ef)](_0xfc65d[_0x513c13]):[],_0x6afa30=_0x4155ba[_0x117545(0x2d5)](_0x30ad31=>JSON[_0x117545(0x1ef)](_0x30ad31));break;case _0x117545(0x238):_0x6afa30=_0xfc65d[_0x513c13]!==''?new Function(JSON[_0x117545(0x1ef)](_0xfc65d[_0x513c13])):new Function(_0x117545(0x252));break;case _0x117545(0x262):_0x4155ba=_0xfc65d[_0x513c13]!==''?JSON[_0x117545(0x1ef)](_0xfc65d[_0x513c13]):[],_0x6afa30=_0x4155ba['map'](_0x540c17=>new Function(JSON[_0x117545(0x1ef)](_0x540c17)));break;case'STR':_0x6afa30=_0xfc65d[_0x513c13]!==''?String(_0xfc65d[_0x513c13]):'';break;case _0x117545(0x217):_0x4155ba=_0xfc65d[_0x513c13]!==''?JSON[_0x117545(0x1ef)](_0xfc65d[_0x513c13]):[],_0x6afa30=_0x4155ba[_0x117545(0x2d5)](_0x2a18d2=>String(_0x2a18d2));break;case _0x117545(0x2ba):_0x2f9ef5=_0xfc65d[_0x513c13]!==''?JSON[_0x117545(0x1ef)](_0xfc65d[_0x513c13]):{},_0x6afa30=VisuMZ[_0x117545(0x23b)]({},_0x2f9ef5);break;case'ARRAYSTRUCT':_0x4155ba=_0xfc65d[_0x513c13]!==''?JSON[_0x117545(0x1ef)](_0xfc65d[_0x513c13]):[],_0x6afa30=_0x4155ba[_0x117545(0x2d5)](_0x470e4b=>VisuMZ[_0x117545(0x23b)]({},JSON[_0x117545(0x1ef)](_0x470e4b)));break;default:continue;}_0x534c2c[_0x246d3a]=_0x6afa30;}}return _0x534c2c;},(_0x4782fa=>{const _0x2995e5=_0xe014fc,_0x278a56=_0x4782fa[_0x2995e5(0x273)];for(const _0x3b9add of dependencies){if(!Imported[_0x3b9add]){alert(_0x2995e5(0x200)[_0x2995e5(0x20c)](_0x278a56,_0x3b9add)),SceneManager[_0x2995e5(0x288)]();break;}}const _0x3a0483=_0x4782fa['description'];if(_0x3a0483['match'](/\[Version[ ](.*?)\]/i)){if(_0x2995e5(0x264)!==_0x2995e5(0x275)){const _0x12994f=Number(RegExp['$1']);_0x12994f!==VisuMZ[label]['version']&&(alert(_0x2995e5(0x2c0)[_0x2995e5(0x20c)](_0x278a56,_0x12994f)),SceneManager[_0x2995e5(0x288)]());}else{const _0x5222b5=_0xa98567[_0x2995e5(0x27e)][_0x2995e5(0x1fa)][_0x2995e5(0x2a9)],_0x3b37f8=_0x2995e5(0x204)[_0x2995e5(0x20c)](this['_character']['_triggerButtonKeys'][0x0][_0x2995e5(0x20e)]()[_0x2995e5(0x2a1)]());_0x4e9367=_0x5222b5[_0x3b37f8];if(_0x586bfd>0x0)return _0x3d3814;if(_0x3426c6[_0x2995e5(0x23e)]&&_0x497b7c[_0x2995e5(0x234)]){const _0x3be828=this[_0x2995e5(0x207)]['_triggerButtonKeys'][0x0],_0x33b275=_0x4d2dfd[_0x2995e5(0x27e)][_0x2995e5(0x2b3)](_0x3be828);if(_0x33b275>0x0)_0x5e3212=_0x33b275;}}}if(_0x3a0483[_0x2995e5(0x2b2)](/\[Tier[ ](\d+)\]/i)){const _0x20885c=Number(RegExp['$1']);_0x20885c<tier?(alert(_0x2995e5(0x20b)[_0x2995e5(0x20c)](_0x278a56,_0x20885c,tier)),SceneManager[_0x2995e5(0x288)]()):_0x2995e5(0x233)==='JrScI'?tier=Math[_0x2995e5(0x2b1)](_0x20885c,tier):(this['updateButtonTriggerEventSpotlightOpacity'](),_0x33f46d[_0x2995e5(0x247)]()&&this[_0x2995e5(0x244)]());}VisuMZ[_0x2995e5(0x23b)](VisuMZ[label][_0x2995e5(0x1fa)],_0x4782fa[_0x2995e5(0x2d2)]);})(pluginData),VisuMZ['ButtonTriggerEvts'][_0xe014fc(0x291)]={'TriggerButtons':/<TRIGGER (?:BUTTON|BUTTONS):[ ](.*?)>/gi,'NoAutoTriggerIcon':/<NO AUTO TRIGGER ICON>/i,'NoAutoClickTrigger':/<NO AUTO CLICK TRIGGER>/i,'SealMovement':/<(?:SEAL|SEALED) INPUT (?:MOVE|MOVEMENT)>/i,'NoSealMovement':/<NO (?:SEAL|SEALED) INPUT (?:MOVE|MOVEMENT)>/i},VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x1fe)]=Scene_Boot[_0xe014fc(0x22c)][_0xe014fc(0x29d)],Scene_Boot[_0xe014fc(0x22c)][_0xe014fc(0x29d)]=function(){const _0x4798b9=_0xe014fc;VisuMZ[_0x4798b9(0x27e)][_0x4798b9(0x1fe)][_0x4798b9(0x240)](this),ImageManager[_0x4798b9(0x2cb)]();},PluginManager[_0xe014fc(0x231)](pluginData[_0xe014fc(0x273)],'SystemEnableButtonTriggerEvtsMenu',_0x4134d8=>{const _0x1be02a=_0xe014fc;VisuMZ[_0x1be02a(0x23b)](_0x4134d8,_0x4134d8),$gameSystem['setButtonTriggerEventEnabled'](_0x4134d8[_0x1be02a(0x21e)]);}),ImageManager[_0xe014fc(0x2cb)]=function(){const _0x314c18=_0xe014fc;if(this[_0x314c18(0x235)])return this[_0x314c18(0x235)];const _0x15a562=Math['ceil']($dataSystem[_0x314c18(0x2be)][_0x314c18(0x1f9)]*2.5),_0x4e05ae=Math[_0x314c18(0x271)]($dataSystem[_0x314c18(0x2be)][_0x314c18(0x2d7)]*2.5),_0x4a0603=new Bitmap(_0x15a562,_0x4e05ae),_0x14aa1e=Spriteset_Map[_0x314c18(0x29c)];return _0x4a0603[_0x314c18(0x2ca)](0x0,0x0,_0x15a562,_0x4e05ae,_0x314c18(0x237)),_0x4a0603[_0x314c18(0x2da)](_0x15a562/0x2,_0x4e05ae/0x2,_0x14aa1e[_0x314c18(0x272)],_0x314c18(0x221)),_0x4a0603[_0x314c18(0x228)]=![],this[_0x314c18(0x235)]=_0x4a0603,this[_0x314c18(0x235)];},SceneManager[_0xe014fc(0x267)]=function(){const _0x59f0bd=_0xe014fc;return this[_0x59f0bd(0x29b)]&&this[_0x59f0bd(0x29b)][_0x59f0bd(0x24a)]===Scene_Map;},VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x2ac)]=Game_System[_0xe014fc(0x22c)][_0xe014fc(0x212)],Game_System[_0xe014fc(0x22c)][_0xe014fc(0x212)]=function(){const _0x2b441b=_0xe014fc;VisuMZ[_0x2b441b(0x27e)][_0x2b441b(0x2ac)][_0x2b441b(0x240)](this),this[_0x2b441b(0x21a)]();},Game_System[_0xe014fc(0x22c)][_0xe014fc(0x21a)]=function(){const _0x256f09=_0xe014fc;this[_0x256f09(0x21d)]=!![];},Game_System[_0xe014fc(0x22c)]['isButtonTriggerEventEnabled']=function(){const _0x45e345=_0xe014fc;return this['_buttonTriggerEventsEnabled']===undefined&&this[_0x45e345(0x21a)](),this['_buttonTriggerEventsEnabled'];},Game_System['prototype'][_0xe014fc(0x28e)]=function(_0x16a87c){const _0x353384=_0xe014fc;if(this[_0x353384(0x21d)]===undefined){if(_0x353384(0x298)!=='WvRYM')this[_0x353384(0x21a)]();else{const _0x3ba85a=this[_0x353384(0x274)]();_0x3ba85a&&(_0x3ba85a[_0x353384(0x232)](),this['setupStartingMapEvent']()),this[_0x353384(0x202)]();}}this[_0x353384(0x21d)]=_0x16a87c;},Game_Map[_0xe014fc(0x294)]=VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x1fa)][_0xe014fc(0x2a9)][_0xe014fc(0x209)],Game_Map[_0xe014fc(0x22c)][_0xe014fc(0x2a3)]=function(){const _0x55638c=_0xe014fc,_0x144310=VisuMZ[_0x55638c(0x27e)][_0x55638c(0x291)],_0x1d2e97=($dataMap?$dataMap['note']:'')||'';if(_0x1d2e97['match'](_0x144310[_0x55638c(0x286)]))return!![];else{if(_0x1d2e97[_0x55638c(0x2b2)](_0x144310[_0x55638c(0x220)])){if('BgfNV'!==_0x55638c(0x241))return![];else _0x58d266[_0x55638c(0x25a)]=_0x16b572[_0x55638c(0x25a)]||[],_0x2c1e75[_0x55638c(0x25a)][_0x55638c(0x245)]()!==_0x2d8924[_0x55638c(0x2d5)](_0x54fde3=>_0x54fde3[_0x55638c(0x2a6)]())[_0x55638c(0x245)]()&&(this['_buttonTriggerEventTargetIndex']=0x0),_0x171d6c[_0x55638c(0x25a)]=_0x33d122[_0x55638c(0x2d5)](_0x39926c=>_0x39926c[_0x55638c(0x2a6)]()),this[_0x55638c(0x260)]=_0x3e5768,this[_0x55638c(0x20d)]=this['_buttonTriggerEventTargetIndex']||0x0;}}return Game_Map['BUTTON_TRIGGER_EVENTS_DEFAULT_SEALED_MOVEMENT'];},Game_Map[_0xe014fc(0x22c)]['isEventButtonTriggered']=function(_0x59a741){const _0x386d59=_0xe014fc;for(const _0x335393 of this[_0x386d59(0x295)]()){if(_0x386d59(0x297)===_0x386d59(0x297)){if(!_0x335393)continue;if(_0x335393['hasButtonTriggerKey'](_0x59a741))return!![];}else{if(!this[_0x386d59(0x27a)]())return;this[_0x386d59(0x21a)](),this[_0x386d59(0x261)](),this[_0x386d59(0x1f1)]();}}return![];},Game_Map[_0xe014fc(0x22c)][_0xe014fc(0x2a4)]=function(_0x284f4f){const _0x70641c=_0xe014fc,_0x2f12b6=this[_0x70641c(0x295)]()[_0x70641c(0x29e)](_0x511113=>_0x511113&&_0x511113['hasButtonTriggerKey'](_0x284f4f));if(_0x2f12b6[_0x70641c(0x1fb)]<=0x0){if(_0x70641c(0x25f)===_0x70641c(0x223))_0x42a460=_0x5d4348[_0x70641c(0x29e)](_0x30194a=>_0x30194a&&_0x30194a['x']>_0x4c9553['x']);else return;}else{if(_0x2f12b6[_0x70641c(0x1fb)]===0x1){if(_0x70641c(0x1f2)==='QEDvp')this[_0x70641c(0x24e)](_0x2f12b6);else{const _0x244988=_0x1aa565[_0x70641c(0x29e)](_0x2bd744=>_0x2bd744[_0x70641c(0x216)]());_0x244988[_0x70641c(0x1fb)]===0x0?this[_0x70641c(0x24e)](_0x4cfb45):this[_0x70641c(0x2a5)](_0x244988);}}else{if(_0x2f12b6[_0x70641c(0x1fb)]>0x1){const _0x34b4d4=_0x2f12b6[_0x70641c(0x29e)](_0x43594e=>_0x43594e[_0x70641c(0x216)]());if(_0x34b4d4['length']===0x0)this[_0x70641c(0x24e)](_0x2f12b6);else{if(_0x70641c(0x2cc)!=='kmXzA'){if(_0x4907b8&&_0x4bd653[_0x70641c(0x247)]())return![];return _0x56ae16[_0x70641c(0x27e)]['Game_Player_canStartLocalEvents']['call'](this);}else this[_0x70641c(0x2a5)](_0x34b4d4);}}}}},Game_Map[_0xe014fc(0x22c)]['setupEventButtonTriggerEventList']=function(_0x136161){const _0x243398=_0xe014fc,_0x5ae9b2=_0x136161[0x0];_0x5ae9b2[_0x243398(0x232)](),this[_0x243398(0x215)]();},Game_Map[_0xe014fc(0x22c)]['clearButtonTriggerEventMultiple']=function(){const _0x300f80=_0xe014fc;this[_0x300f80(0x260)]=undefined,Input[_0x300f80(0x23c)]();},Game_Map[_0xe014fc(0x22c)][_0xe014fc(0x2a5)]=function(_0x237d4e){const _0x29ce3d=_0xe014fc;$gameTemp[_0x29ce3d(0x25a)]=$gameTemp[_0x29ce3d(0x25a)]||[],$gameTemp[_0x29ce3d(0x25a)]['toString']()!==_0x237d4e[_0x29ce3d(0x2d5)](_0x315f67=>_0x315f67[_0x29ce3d(0x2a6)]())[_0x29ce3d(0x245)]()&&(_0x29ce3d(0x278)!==_0x29ce3d(0x278)?this[_0x29ce3d(0x254)][_0x29ce3d(0x279)](_0x1c05a0):this[_0x29ce3d(0x20d)]=0x0),$gameTemp['_lastButtonTriggerEvents']=_0x237d4e[_0x29ce3d(0x2d5)](_0x2f78e0=>_0x2f78e0[_0x29ce3d(0x2a6)]()),this['_buttonTriggerEventTargets']=_0x237d4e,this[_0x29ce3d(0x20d)]=this['_buttonTriggerEventTargetIndex']||0x0;},Game_Map[_0xe014fc(0x22c)]['isButtonTriggerEventSpotlightMode']=function(){const _0x23c785=_0xe014fc;return this[_0x23c785(0x260)]&&this[_0x23c785(0x260)][_0x23c785(0x1fb)]>0x0;},Game_Map[_0xe014fc(0x22c)][_0xe014fc(0x274)]=function(){const _0xa04398=_0xe014fc;if(this[_0xa04398(0x260)]){const _0x6867d8=this[_0xa04398(0x20d)];return this[_0xa04398(0x260)][_0x6867d8];}return null;},Game_Map[_0xe014fc(0x22c)][_0xe014fc(0x222)]=function(){const _0x133d99=_0xe014fc;if(Input[_0x133d99(0x22b)](_0x133d99(0x270))){if(_0x133d99(0x22a)!=='qJeiy')return!![];else SoundManager[_0x133d99(0x24d)](),this[_0x133d99(0x202)]();}else{if(Input[_0x133d99(0x22b)]('ok'))this[_0x133d99(0x258)]();else(Input[_0x133d99(0x287)](_0x133d99(0x2a8))||Input[_0x133d99(0x287)]('up')||Input[_0x133d99(0x287)](_0x133d99(0x257))||Input[_0x133d99(0x287)](_0x133d99(0x2b7)))&&(_0x133d99(0x24b)!=='dytwV'?this[_0x133d99(0x213)]():this[_0x133d99(0x2a5)](_0x32f13e));}},Game_Map[_0xe014fc(0x22c)]['onButtonTriggerEventSpotlightOk']=function(){const _0x4d7ad0=_0xe014fc,_0x5976ba=this[_0x4d7ad0(0x274)]();_0x5976ba&&(_0x5976ba['start'](),this['setupStartingMapEvent']()),this['clearButtonTriggerEventMultiple']();},Game_Map[_0xe014fc(0x22c)][_0xe014fc(0x213)]=function(){const _0x1431dc=_0xe014fc,_0x396e42=this[_0x1431dc(0x20d)];this[_0x1431dc(0x269)](Input['dir4']),this[_0x1431dc(0x20d)]!==_0x396e42&&SoundManager[_0x1431dc(0x2c9)]();},Game_Map[_0xe014fc(0x22c)][_0xe014fc(0x269)]=function(_0x5d1f09){const _0x2ad40e=_0xe014fc;Input[_0x2ad40e(0x23c)]();const _0x3b756d=this[_0x2ad40e(0x260)],_0x59c044=this[_0x2ad40e(0x274)]();let _0xad1bd9=[];if(!_0x59c044){if(_0x2ad40e(0x227)!==_0x2ad40e(0x227)){const _0x5bdb7d=this[_0x2ad40e(0x2c1)],_0x447894=_0xeee41b[_0x2ad40e(0x29c)],_0x579479=_0xb5dcfe[_0x2ad40e(0x247)]()?_0x447894[_0x2ad40e(0x283)]:0x0,_0x4929fa=_0x447894['fadeSpeed'];if(_0x5bdb7d&&_0x5bdb7d[_0x2ad40e(0x283)]!==_0x579479){if(_0x5bdb7d[_0x2ad40e(0x283)]>_0x579479)_0x5bdb7d[_0x2ad40e(0x283)]=_0x2ba492[_0x2ad40e(0x2b1)](_0x5bdb7d[_0x2ad40e(0x283)]-_0x4929fa,_0x579479);else _0x5bdb7d[_0x2ad40e(0x283)]<_0x579479&&(_0x5bdb7d[_0x2ad40e(0x283)]=_0x1f315f[_0x2ad40e(0x2af)](_0x5bdb7d[_0x2ad40e(0x283)]+_0x4929fa,_0x579479));}}else{this['_buttonTriggerEventTargets']['remove'](null)[_0x2ad40e(0x25b)](undefined),this[_0x2ad40e(0x20d)]=0x0;return;}}if(_0x5d1f09===0x2||_0x5d1f09===0x8){if('FoHCC'!==_0x2ad40e(0x2ad)){if(this[_0x2ad40e(0x250)])return![];if(_0x58256e[_0x2ad40e(0x25d)]&&this[_0x2ad40e(0x254)]&&this['_triggerButtonKeys'][_0x2ad40e(0x1fb)]>0x0)return this['_antiAutoButtonTriggerClickTrigger']?![]:!![];return _0x4f4b06['ButtonTriggerEvts']['Game_Event_hasClickTrigger']['call'](this);}else _0x5d1f09===0x2?_0xad1bd9=_0x3b756d[_0x2ad40e(0x29e)](_0x5ddf41=>_0x5ddf41&&_0x5ddf41['y']>_0x59c044['y']):_0x2ad40e(0x2c7)!==_0x2ad40e(0x2c7)?_0x43d81c=_0x5a6f17['filter'](_0x22c223=>_0x22c223&&_0x22c223['y']>_0x3e10e3['y']):_0xad1bd9=_0x3b756d[_0x2ad40e(0x29e)](_0x40ec9b=>_0x40ec9b&&_0x40ec9b['y']<_0x59c044['y']),_0xad1bd9[_0x2ad40e(0x1fb)]>0x0&&(_0x2ad40e(0x23a)==='ykBtt'?_0x37291d=_0x30073e['filter'](_0x37e30c=>_0x37e30c&&_0x37e30c['x']<_0x348768['x']):_0xad1bd9['sort']((_0x23d3e4,_0x8bf7ea)=>{const _0x5dc765=_0x2ad40e,_0xe9e126=Math[_0x5dc765(0x26c)](_0x59c044['y']-_0x23d3e4['y']),_0x3474f4=Math[_0x5dc765(0x26c)](_0x59c044['y']-_0x8bf7ea['y']);if(_0xe9e126!==_0x3474f4){if('kIvgd'===_0x5dc765(0x280))return _0xe9e126-_0x3474f4;else _0x46b0ea[_0x5dc765(0x27e)][_0x5dc765(0x2d4)][_0x5dc765(0x240)](this),this[_0x5dc765(0x2b9)]();}const _0x2e7290=Math[_0x5dc765(0x26c)](this[_0x5dc765(0x1fc)](_0x59c044['x'],_0x59c044['y'],_0x23d3e4['x'],_0x23d3e4['y'])),_0x53127d=Math[_0x5dc765(0x26c)](this['distance'](_0x59c044['x'],_0x59c044['y'],_0x8bf7ea['x'],_0x8bf7ea['y']));if(_0x2e7290!==_0x53127d)return _0x2e7290-_0x53127d;return _0x23d3e4[_0x5dc765(0x2a6)]()-_0x8bf7ea[_0x5dc765(0x2a6)]();}));}if(_0x5d1f09===0x4||_0x5d1f09===0x6){if('GtngU'===_0x2ad40e(0x284)){if(_0x12f69f&&_0x12fdd2[_0x2ad40e(0x2c8)]()){_0x4cd93b[_0x2ad40e(0x27e)][_0x2ad40e(0x2d3)][_0x2ad40e(0x240)](this);return;}}else _0x5d1f09===0x4?_0xad1bd9=_0x3b756d[_0x2ad40e(0x29e)](_0x239612=>_0x239612&&_0x239612['x']<_0x59c044['x']):_0xad1bd9=_0x3b756d[_0x2ad40e(0x29e)](_0x4e3163=>_0x4e3163&&_0x4e3163['x']>_0x59c044['x']),_0xad1bd9[_0x2ad40e(0x1fb)]>0x0&&_0xad1bd9[_0x2ad40e(0x2c2)]((_0x2b2cce,_0x1c0f99)=>{const _0x494152=_0x2ad40e,_0x55b082=Math[_0x494152(0x26c)](_0x59c044['x']-_0x2b2cce['x']),_0x3c7108=Math[_0x494152(0x26c)](_0x59c044['x']-_0x1c0f99['x']);if(_0x55b082!==_0x3c7108)return _0x55b082-_0x3c7108;const _0x3becdf=Math[_0x494152(0x26c)](this[_0x494152(0x1fc)](_0x59c044['x'],_0x59c044['y'],_0x2b2cce['x'],_0x2b2cce['y'])),_0x3e8515=Math[_0x494152(0x26c)](this['distance'](_0x59c044['x'],_0x59c044['y'],_0x1c0f99['x'],_0x1c0f99['y']));if(_0x3becdf!==_0x3e8515)return _0x3becdf-_0x3e8515;return _0x2b2cce[_0x494152(0x2a6)]()-_0x1c0f99[_0x494152(0x2a6)]();});}if(_0xad1bd9[_0x2ad40e(0x1fb)]>0x0){if(_0x2ad40e(0x1f6)===_0x2ad40e(0x253))_0x5e0905[_0x2ad40e(0x27e)][_0x2ad40e(0x236)][_0x2ad40e(0x240)](this),this[_0x2ad40e(0x1f0)]();else{const _0x2a4294=_0xad1bd9[0x0];this[_0x2ad40e(0x20d)]=_0x3b756d[_0x2ad40e(0x224)](_0x2a4294);}}},VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x2c4)]=Game_CharacterBase[_0xe014fc(0x22c)][_0xe014fc(0x2bb)],Game_CharacterBase[_0xe014fc(0x22c)][_0xe014fc(0x2bb)]=function(){const _0x16bfdc=_0xe014fc;if($gameMap&&$gameMap[_0x16bfdc(0x247)]())return;VisuMZ[_0x16bfdc(0x27e)][_0x16bfdc(0x2c4)][_0x16bfdc(0x240)](this);},VisuMZ['ButtonTriggerEvts'][_0xe014fc(0x249)]=Game_Event[_0xe014fc(0x22c)][_0xe014fc(0x246)],Game_Event[_0xe014fc(0x22c)][_0xe014fc(0x246)]=function(){const _0x2588d1=_0xe014fc;if($gameMap&&$gameMap['isButtonTriggerEventSpotlightMode']())return;VisuMZ[_0x2588d1(0x27e)][_0x2588d1(0x249)][_0x2588d1(0x240)](this);},Game_Event['prototype']['isNearThePlayerScreen']=function(){const _0x510f8f=_0xe014fc,_0x6f14e1=Math[_0x510f8f(0x271)](Graphics[_0x510f8f(0x2aa)]/0x2/$gameMap[_0x510f8f(0x225)]()),_0xa078ff=Math[_0x510f8f(0x271)](Graphics['height']/0x2/$gameMap[_0x510f8f(0x25e)]()),_0x59242e=Math['abs'](this[_0x510f8f(0x28d)]($gamePlayer['x'])),_0x42afa7=Math['abs'](this[_0x510f8f(0x1f3)]($gamePlayer['y']));return _0x59242e<_0x6f14e1&&_0x42afa7<_0xa078ff;},VisuMZ['ButtonTriggerEvts'][_0xe014fc(0x2d3)]=Game_Player['prototype'][_0xe014fc(0x293)],Game_Player[_0xe014fc(0x22c)][_0xe014fc(0x293)]=function(){const _0x245a7d=_0xe014fc;if(Imported[_0x245a7d(0x1f4)]){if($gameMap&&$gameMap['isFurnitureSystemMode']()){VisuMZ[_0x245a7d(0x27e)]['Game_Player_moveByInput'][_0x245a7d(0x240)](this);return;}}if($gameMap&&$gameMap[_0x245a7d(0x247)]()){if(_0x245a7d(0x27f)===_0x245a7d(0x2cf)){const _0x3bf0bc=this['_buttonTriggerEventTargetIndex'];this[_0x245a7d(0x269)](_0x432139[_0x245a7d(0x1fd)]),this[_0x245a7d(0x20d)]!==_0x3bf0bc&&_0x4462af['playCursor']();}else{$gameMap['updateButtonTriggerEventSpotlightInput']();return;}}if(!this[_0x245a7d(0x2b8)]()&&this['canMove']()){if(this[_0x245a7d(0x1ff)]())return!![];}if($gameMap&&$gameMap[_0x245a7d(0x2a3)]()){if(_0x245a7d(0x255)!==_0x245a7d(0x2d9))return;else{if(this['_buttonTriggerEventTargets']){const _0x3d2bea=this['_buttonTriggerEventTargetIndex'];return this['_buttonTriggerEventTargets'][_0x3d2bea];}return null;}}VisuMZ[_0x245a7d(0x27e)][_0x245a7d(0x2d3)]['call'](this);},Game_Player[_0xe014fc(0x22c)][_0xe014fc(0x1ff)]=function(){const _0x141be7=_0xe014fc;if(!$gameSystem[_0x141be7(0x1f7)]())return![];if(!this[_0x141be7(0x24f)]())return![];if(!SceneManager['isSceneMap']())return![];const _0x41fe7d=[_0x141be7(0x2a8),'left',_0x141be7(0x2b7),'up','ok','cancel',_0x141be7(0x2d8),'pagedown','control',_0x141be7(0x226),_0x141be7(0x2a0)];for(let _0x33b309 of _0x41fe7d){if(Input[_0x141be7(0x22b)](_0x33b309)&&$gameMap['isEventButtonTriggered'](_0x33b309))return $gameMap['setupEventButtonTrigger'](_0x33b309),!![];}return![];},VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x2db)]=Game_Player[_0xe014fc(0x22c)][_0xe014fc(0x24f)],Game_Player['prototype'][_0xe014fc(0x24f)]=function(){const _0x328186=_0xe014fc;if($gameMap&&$gameMap[_0x328186(0x247)]())return![];return VisuMZ[_0x328186(0x27e)][_0x328186(0x2db)][_0x328186(0x240)](this);},Game_Event[_0xe014fc(0x25d)]=VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x1fa)][_0xe014fc(0x2a9)][_0xe014fc(0x230)];;VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x276)]=Game_Event[_0xe014fc(0x22c)][_0xe014fc(0x29f)],Game_Event[_0xe014fc(0x22c)]['clearPageSettings']=function(){const _0x55a016=_0xe014fc;VisuMZ[_0x55a016(0x27e)][_0x55a016(0x276)][_0x55a016(0x240)](this),this['initButtonTriggerEventSettings']();},Game_Event[_0xe014fc(0x22c)][_0xe014fc(0x21a)]=function(){const _0x48e22f=_0xe014fc;this['_triggerButtonKeys']=[],this[_0x48e22f(0x26e)]=!![],this['_antiAutoButtonTriggerClickTrigger']=![];},VisuMZ['ButtonTriggerEvts'][_0xe014fc(0x2d4)]=Game_Event[_0xe014fc(0x22c)]['setupPageSettings'],Game_Event['prototype'][_0xe014fc(0x214)]=function(){const _0x5d9eb4=_0xe014fc;VisuMZ['ButtonTriggerEvts'][_0x5d9eb4(0x2d4)]['call'](this),this[_0x5d9eb4(0x2b9)]();},Game_Event[_0xe014fc(0x22c)][_0xe014fc(0x2b9)]=function(){const _0x142781=_0xe014fc;if(!this[_0x142781(0x27a)]())return;this['initButtonTriggerEventSettings'](),this['setupButtonTriggerEventNotetags'](),this[_0x142781(0x1f1)]();},Game_Event['prototype'][_0xe014fc(0x261)]=function(){const _0x3e33e0=_0xe014fc;if(!this['event']())return;const _0x6818f=this[_0x3e33e0(0x27a)]()[_0x3e33e0(0x2a7)];if(_0x6818f==='')return;this[_0x3e33e0(0x2ab)](_0x6818f);},Game_Event['prototype'][_0xe014fc(0x1f1)]=function(){const _0x553dc3=_0xe014fc;if(!this['event']())return;if(!this[_0x553dc3(0x22f)]())return;const _0x1893db=this[_0x553dc3(0x242)]();let _0x15ca56='';for(const _0x307df4 of _0x1893db){if([0x6c,0x198][_0x553dc3(0x27c)](_0x307df4[_0x553dc3(0x2b4)])){if(_0x15ca56!=='')_0x15ca56+='\x0a';_0x15ca56+=_0x307df4[_0x553dc3(0x2d2)][0x0];}}this[_0x553dc3(0x2ab)](_0x15ca56);},Game_Event['prototype'][_0xe014fc(0x2ab)]=function(_0x35281d){const _0x4367ee=_0xe014fc,_0x27d6ae=VisuMZ[_0x4367ee(0x27e)][_0x4367ee(0x291)],_0x47987e=_0x35281d[_0x4367ee(0x2b2)](_0x27d6ae[_0x4367ee(0x26f)]);if(_0x47987e)for(const _0x1c5c78 of _0x47987e){if('mijsP'!==_0x4367ee(0x266)){_0x1c5c78[_0x4367ee(0x2b2)](_0x27d6ae['TriggerButtons']);const _0x51e426=String(RegExp['$1'])[_0x4367ee(0x219)](',')[_0x4367ee(0x2d5)](_0x1358e5=>_0x1358e5[_0x4367ee(0x203)]()[_0x4367ee(0x2a1)]());this[_0x4367ee(0x254)]=this[_0x4367ee(0x254)]||[];for(const _0x31a618 of _0x51e426){!this[_0x4367ee(0x254)][_0x4367ee(0x27c)](_0x31a618)&&this[_0x4367ee(0x254)][_0x4367ee(0x279)](_0x31a618);}}else return _0x380469-_0x4cd1b2;}_0x35281d['match'](_0x27d6ae[_0x4367ee(0x2d6)])&&(this['_autoButtonTriggerEventIcon']=![]),_0x35281d['match'](_0x27d6ae[_0x4367ee(0x2bf)])&&('SMOKK'!==_0x4367ee(0x2c5)?this[_0x4367ee(0x251)]=!![]:this[_0x4367ee(0x21d)]=!![]);},Game_Event[_0xe014fc(0x22c)][_0xe014fc(0x26b)]=function(_0x5e601e){const _0x56d400=_0xe014fc;if(!this['isTriggerIn']([0x0,0x1,0x2]))return![];return _0x5e601e=_0x5e601e||'',this['_triggerButtonKeys']=this[_0x56d400(0x254)]||[],this['_triggerButtonKeys'][_0x56d400(0x27c)](_0x5e601e['toLowerCase']()[_0x56d400(0x2a1)]());},VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x22d)]=Game_Event['prototype']['hasClickTrigger'],Game_Event[_0xe014fc(0x22c)][_0xe014fc(0x21f)]=function(){const _0x45cc17=_0xe014fc;if(this[_0x45cc17(0x250)])return![];if(Game_Event[_0x45cc17(0x25d)]&&this[_0x45cc17(0x254)]&&this['_triggerButtonKeys'][_0x45cc17(0x1fb)]>0x0){if(this['_antiAutoButtonTriggerClickTrigger']){if('LObCC'!=='LObCC'){if(this[_0x45cc17(0x1ff)]())return!![];}else return![];}else{if(_0x45cc17(0x277)===_0x45cc17(0x277))return!![];else for(const _0x1ebb38 of _0x4dc663){_0x1ebb38[_0x45cc17(0x2b2)](_0x2f37b0[_0x45cc17(0x26f)]);const _0x56e50a=_0x200a18(_0xd97b2d['$1'])[_0x45cc17(0x219)](',')[_0x45cc17(0x2d5)](_0x596c38=>_0x596c38['toLowerCase']()[_0x45cc17(0x2a1)]());this[_0x45cc17(0x254)]=this['_triggerButtonKeys']||[];for(const _0xb5ef66 of _0x56e50a){!this[_0x45cc17(0x254)][_0x45cc17(0x27c)](_0xb5ef66)&&this['_triggerButtonKeys']['push'](_0xb5ef66);}}}}return VisuMZ[_0x45cc17(0x27e)][_0x45cc17(0x22d)][_0x45cc17(0x240)](this);},VisuMZ['ButtonTriggerEvts']['Scene_Map_isSceneChangeOk']=Scene_Map[_0xe014fc(0x22c)][_0xe014fc(0x20f)],Scene_Map[_0xe014fc(0x22c)]['isSceneChangeOk']=function(){const _0x16816b=_0xe014fc;if($gameMap['isButtonTriggerEventSpotlightMode']())return![];return VisuMZ['ButtonTriggerEvts'][_0x16816b(0x21c)]['call'](this);},VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x239)]=Scene_Map['prototype'][_0xe014fc(0x29a)],Scene_Map[_0xe014fc(0x22c)][_0xe014fc(0x29a)]=function(){const _0x2ec74e=_0xe014fc;if($gameMap[_0x2ec74e(0x247)]()){if(_0x2ec74e(0x1f8)!==_0x2ec74e(0x1f8))return _0x1e3fc7-_0x38859e;else $gameMap[_0x2ec74e(0x202)]();}VisuMZ['ButtonTriggerEvts'][_0x2ec74e(0x239)]['call'](this);},VisuMZ['ButtonTriggerEvts'][_0xe014fc(0x2ce)]=Scene_Map[_0xe014fc(0x22c)][_0xe014fc(0x2d0)],Scene_Map[_0xe014fc(0x22c)]['isMenuEnabled']=function(){const _0x18e2e8=_0xe014fc;if($gameMap[_0x18e2e8(0x247)]())return![];return VisuMZ[_0x18e2e8(0x27e)][_0x18e2e8(0x2ce)][_0x18e2e8(0x240)](this);},VisuMZ['ButtonTriggerEvts'][_0xe014fc(0x265)]=Sprite_Character['prototype'][_0xe014fc(0x28c)],Sprite_Character[_0xe014fc(0x22c)][_0xe014fc(0x28c)]=function(){const _0x1ec252=_0xe014fc;if($gameMap&&$gameMap[_0x1ec252(0x247)]())return![];if($gameMap&&$gameMap['hasSealedMovement']())return![];return VisuMZ['ButtonTriggerEvts'][_0x1ec252(0x265)][_0x1ec252(0x240)](this);},VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x243)]=Sprite_Character[_0xe014fc(0x22c)]['getEventIconIndex'],Sprite_Character['prototype'][_0xe014fc(0x218)]=function(){const _0x82edf1=_0xe014fc;let _0x4a5f73=VisuMZ['ButtonTriggerEvts'][_0x82edf1(0x243)][_0x82edf1(0x240)](this);if(_0x4a5f73>0x0)return _0x4a5f73;if(!this['_character'])return _0x4a5f73;if(this[_0x82edf1(0x207)][_0x82edf1(0x24a)]['name']!=='Game_Event')return _0x4a5f73;if(!this[_0x82edf1(0x207)]['_autoButtonTriggerEventIcon'])return _0x4a5f73;return this['getButtonTriggerEventKeyIconIndex'](_0x4a5f73);},Sprite_Character[_0xe014fc(0x23e)]=VisuMZ[_0xe014fc(0x27e)]['Settings'][_0xe014fc(0x2a9)]['AutoSynchronize']??!![],Sprite_Character[_0xe014fc(0x22c)][_0xe014fc(0x2ae)]=function(_0xa62fa9){const _0x2cb8cc=_0xe014fc;this[_0x2cb8cc(0x207)][_0x2cb8cc(0x254)]=this[_0x2cb8cc(0x207)]['_triggerButtonKeys']||[];if(this[_0x2cb8cc(0x207)]['_triggerButtonKeys']['length']>0x0){if(_0x2cb8cc(0x290)===_0x2cb8cc(0x211))_0xd27929(_0x2cb8cc(0x20b)[_0x2cb8cc(0x20c)](_0x46c3e0,_0x46d012,_0x21c22b)),_0x45f31f['exit']();else{const _0xbdff95=VisuMZ[_0x2cb8cc(0x27e)][_0x2cb8cc(0x1fa)][_0x2cb8cc(0x2a9)],_0x121989=_0x2cb8cc(0x204)[_0x2cb8cc(0x20c)](this[_0x2cb8cc(0x207)][_0x2cb8cc(0x254)][0x0]['toUpperCase']()[_0x2cb8cc(0x2a1)]());_0xa62fa9=_0xbdff95[_0x121989];if(_0xa62fa9>0x0)return _0xa62fa9;if(Sprite_Character[_0x2cb8cc(0x23e)]&&Imported['VisuMZ_0_CoreEngine']){const _0x3441db=this[_0x2cb8cc(0x207)][_0x2cb8cc(0x254)][0x0],_0x55121e=VisuMZ[_0x2cb8cc(0x27e)]['GetCoreEngineButtonKeyIcon'](_0x3441db);if(_0x55121e>0x0)_0xa62fa9=_0x55121e;}}}return _0xa62fa9;},VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x2b3)]=function(_0x112fc2){const _0x46c876=_0xe014fc;this[_0x46c876(0x20a)]=this['_gamepadType']||{};const _0x7c7d06=Input['getLastUsedGamepadType']();this[_0x46c876(0x20a)][_0x7c7d06]=this[_0x46c876(0x20a)][_0x7c7d06]||{};if(this['_gamepadType'][_0x7c7d06][_0x112fc2]!==undefined)return this[_0x46c876(0x20a)][_0x7c7d06][_0x112fc2];this[_0x46c876(0x20a)][_0x7c7d06][_0x112fc2]=0x0;const _0x2cf7bf=TextManager['getInputButtonString'](_0x112fc2);return _0x2cf7bf[_0x46c876(0x2b2)](/\\I\[(\d+)\]/i)&&(this['_gamepadType'][_0x7c7d06][_0x112fc2]=Number(RegExp['$1'])),this[_0x46c876(0x20a)][_0x7c7d06][_0x112fc2];},Spriteset_Map[_0xe014fc(0x29c)]={'filename':VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x1fa)][_0xe014fc(0x2b0)][_0xe014fc(0x23d)]||'','customAnchorX':VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x1fa)][_0xe014fc(0x2b0)][_0xe014fc(0x24c)]||0x0,'customAnchorY':VisuMZ[_0xe014fc(0x27e)]['Settings'][_0xe014fc(0x2b0)][_0xe014fc(0x206)]||0x0,'customBlendMode':VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x1fa)]['Spotlight'][_0xe014fc(0x2c3)]||0x0,'radius':VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x1fa)][_0xe014fc(0x2b0)]['Radius']||0x1,'opacity':VisuMZ[_0xe014fc(0x27e)]['Settings'][_0xe014fc(0x2b0)][_0xe014fc(0x259)]||0x1,'fadeSpeed':VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x1fa)]['Spotlight'][_0xe014fc(0x289)]||0x1},VisuMZ[_0xe014fc(0x27e)][_0xe014fc(0x236)]=Spriteset_Map[_0xe014fc(0x22c)][_0xe014fc(0x2bc)],Spriteset_Map[_0xe014fc(0x22c)]['createLowerLayer']=function(){const _0x45a50f=_0xe014fc;VisuMZ[_0x45a50f(0x27e)][_0x45a50f(0x236)][_0x45a50f(0x240)](this),this[_0x45a50f(0x1f0)]();},Spriteset_Map[_0xe014fc(0x22c)][_0xe014fc(0x1f0)]=function(){const _0x3e5718=_0xe014fc,_0xbc0c41=Spriteset_Map[_0x3e5718(0x29c)],_0x4fdf25=new Sprite();_0xbc0c41[_0x3e5718(0x25c)]!==''?_0x4fdf25[_0x3e5718(0x27b)]=ImageManager[_0x3e5718(0x26a)](_0xbc0c41[_0x3e5718(0x25c)]):_0x4fdf25['bitmap']=ImageManager[_0x3e5718(0x2cb)](),_0x4fdf25[_0x3e5718(0x283)]=0x0,_0xbc0c41[_0x3e5718(0x25c)]!==''?(_0x4fdf25[_0x3e5718(0x248)]['x']=_0xbc0c41[_0x3e5718(0x256)],_0x4fdf25[_0x3e5718(0x248)]['y']=_0xbc0c41['customAnchorY'],_0x4fdf25[_0x3e5718(0x27d)]=_0xbc0c41[_0x3e5718(0x208)]):(_0x4fdf25[_0x3e5718(0x248)]['x']=0.5,_0x4fdf25[_0x3e5718(0x248)]['y']=0.5,_0x4fdf25[_0x3e5718(0x27d)]=0x2),this[_0x3e5718(0x2c1)]=_0x4fdf25,this[_0x3e5718(0x28f)](this['_buttonTriggerEventSpotlightSprite']);},VisuMZ['ButtonTriggerEvts'][_0xe014fc(0x201)]=Spriteset_Map[_0xe014fc(0x22c)][_0xe014fc(0x2c6)],Spriteset_Map[_0xe014fc(0x22c)]['update']=function(){const _0x26c7da=_0xe014fc;VisuMZ['ButtonTriggerEvts'][_0x26c7da(0x201)][_0x26c7da(0x240)](this),this[_0x26c7da(0x282)]();},Spriteset_Map['prototype']['updateButtonTriggerEventSpotlightSprite']=function(){const _0x22088c=_0xe014fc;this['updateButtonTriggerEventSpotlightOpacity'](),$gameMap[_0x22088c(0x247)]()&&this[_0x22088c(0x244)]();},Spriteset_Map[_0xe014fc(0x22c)][_0xe014fc(0x1f5)]=function(){const _0x160444=_0xe014fc,_0x3e9b52=this[_0x160444(0x2c1)],_0x43f38a=Spriteset_Map[_0x160444(0x29c)],_0x253437=$gameMap[_0x160444(0x247)]()?_0x43f38a[_0x160444(0x283)]:0x0,_0xe6bbd2=_0x43f38a[_0x160444(0x2d1)];if(_0x3e9b52&&_0x3e9b52[_0x160444(0x283)]!==_0x253437){if(_0x160444(0x21b)===_0x160444(0x2b6)){if(_0x11a095[_0x160444(0x247)]())return![];return _0x5b7f6c['ButtonTriggerEvts'][_0x160444(0x2ce)]['call'](this);}else{if(_0x3e9b52[_0x160444(0x283)]>_0x253437)_0x3e9b52['opacity']=Math[_0x160444(0x2b1)](_0x3e9b52[_0x160444(0x283)]-_0xe6bbd2,_0x253437);else _0x3e9b52[_0x160444(0x283)]<_0x253437&&(_0x3e9b52[_0x160444(0x283)]=Math[_0x160444(0x2af)](_0x3e9b52['opacity']+_0xe6bbd2,_0x253437));}}},Spriteset_Map[_0xe014fc(0x22c)][_0xe014fc(0x244)]=function(){const _0x4a3100=_0xe014fc,_0xce0073=this[_0x4a3100(0x2c1)];let _0x5c1259=this[_0x4a3100(0x292)]($gamePlayer);const _0x1a4f97=$gameMap[_0x4a3100(0x274)]();_0x1a4f97&&(_0x5c1259=this[_0x4a3100(0x292)](_0x1a4f97)),_0xce0073['x']=_0x5c1259[_0x4a3100(0x207)][_0x4a3100(0x281)](),_0xce0073['y']=_0x5c1259[_0x4a3100(0x207)]['screenY']()-Math['round'](_0x5c1259['height']/0x2);};