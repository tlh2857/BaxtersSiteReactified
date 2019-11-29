import react from "React";

export default InViewport; 

function InViewport (element1,element2){
    const element1View = element1.getBoundingClientRect(bottom);
    const element2View = element2.getBoundingClientRect(bottom);
    return(element1View<element2View);
};

/*  if(InViewport()){
        props.setView('bottom');
    } else props.setView('top');
    */