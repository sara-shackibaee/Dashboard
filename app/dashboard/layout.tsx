import MainMenue from "./components/MainMenue"

type Props ={
    children:React.ReactNode

}
export default function LayoutDashboard({children}: Props){
    return(
    
    <div className="grid grid-cols-[250px_1fr] h-screen">

       <MainMenue />
        <div className="overflow-auto py-2 px-4">
            <h1 className="pb-4">Welcom back, Sam!</h1>
            {children}</div>
    </div>)
}