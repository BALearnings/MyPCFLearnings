import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { NuveiForm } from "./src/components/NuveiForm";

export class NuveiPaymentControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private container: HTMLDivElement;

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
        this.container = container;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        ReactDOM.render(<NuveiForm />, this.container);
    }

    public destroy(): void {
        ReactDOM.unmountComponentAtNode(this.container);
    }
}