export class Env {
    readonly host: string;
    readonly coboPub: string;
    constructor(host:string, coboPub:string){
        this.host = host;
        this.coboPub = coboPub;
    }
}

export const SANDBOX = new Env("https://api.sandbox.cobo.com","032f45930f652d72e0c90f71869dfe9af7d713b1f67dc2f7cb51f9572778b9c876");
export const PROD = new Env("https://api.custody.cobo.com","02c3e5bacf436fbf4da78597e791579f022a2e85073ae36c54a361ff97f2811376");
