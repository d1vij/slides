const letters = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
] as const;

const modifiers = ["control", "shift", "meta", "alt"] as const;

const specialKeys = [
    // Navigation
    'arrowup', 'arrowdown', 'arrowleft', 'arrowright',
    'home', 'end', 'pageup', 'pagedown',
    // Editing
    'backspace', 'delete', 'insert',
    'enter', 'tab', 'escape', 'space',
    // Function keys
    'f1', 'f2', 'f3', 'f4', 'f5', 'f6',
    'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
    // Numpad
    'numpad0', 'numpad1', 'numpad2', 'numpad3', 'numpad4',
    'numpad5', 'numpad6', 'numpad7', 'numpad8', 'numpad9',
    'numpadadd', 'numpadsubtract', 'numpadmultiply', 'numpaddivide',
    'numpaddecimal', 'numpadenter',
    // Symbols
    'minus', 'equal', 'bracketleft', 'bracketright',
    'backslash', 'semicolon', 'quote', 'comma',
    'period', 'slash', 'backquote',
    // Media
    'mediaplaypause', 'mediastop', 'mediatracknext', 'mediatrackprevious',
    'audiovolumeup', 'audiovolumedown', 'audiovolumemute',
    // Misc
    'capslock', 'numlock', 'scrolllock',
    'printscreen', 'pause', 'contextmenu',
] as const;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

export type Letter = typeof letters[number];
export type Modifier = typeof modifiers[number];
export type SpecialKey = typeof specialKeys[number];
export type Digit = typeof digits[number];
export type AnyKey = Letter | Modifier | SpecialKey | Digit;

export {
    letters,
    modifiers,
    specialKeys,
    digits,
};
