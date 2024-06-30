import {h} from 'preact'

export const HelloComponent = (props: { name: string }) => {
    return <div className="hello">
        My name is {props.name}. I
        am <code>HelloComponent</code> from <code>src/js/components/hello.component.tsx</code> implemented
        with <a href="https://preactjs.com/" target="_blank">Preact</a>
    </div>
}

