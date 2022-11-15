
type Mods = Record<string, boolean | string>;


export function classNames(classname: string, mods: Mods, additional: string[]): string {
return [
    classname,
    ...additional,
    ...Object.entries(mods)
        .filter((classname, value) => Boolean(value))
        .map((classname) => classname)

    ]
    .join(' ')
}