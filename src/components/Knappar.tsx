import { Button } from "./Button";

export function Knappar() {
    return <form action="" className="flex flex-col justify-center">
        <Button className="self-center" id="ohl">Øhl</Button>
        <Button className="self-center" id="cider">Cider</Button>
        <Button className="self-center" id="sprit">Sprit</Button>
    </form>
}