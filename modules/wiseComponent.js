let components = new Map()

export default class   wiseComponent
{
    constructor (name, baseElement, isUnique)
    {
        if (components.get(name) === undefined || components.get(name) === null)
        {
            this.baseElement = baseElement;
            this.name = name;
            this.isUnique = isUnique
            components.set(name, baseElement);
        }
        else
        {
            let error = new Error("Component with the same name already exists.")
            console.error(error.stack);
        }
    }
    add(name, element, isUnique)
    {
        if (isUnique && this.baseElement.hasOwnProperty(name))
        {
            let error = new Error(this.name + " has already an element with the same name.")
            console.error(error.stack);
        }
        this.baseElement.appendChild(element);
        this.baseElement[name] = element;
    }
    addComponent(Component)
    {
        if (Component.isUnique && this.baseElement.hasOwnProperty(Component.name))
        {
            let error = new Error(this.name + " has already an element with the same name.")
            console.error(error.stack);   
        }
        this.baseElement.append(Component.baseElement);
        this.baseElement[Component.name] = Component;
    }
}

export function  getComponent(name)
{
    let res = components.get(name);
    return res
}