function BotonBack({ setCambio, setmostrar }) {
  return (
    <button
      className="botonBACK fixed botonbackfixeado flex flex-col  gap-5  right-16"
      onClick={() => {
        setCambio(false);
        setmostrar(false);
      }}
    >
      <img className="size-6 -rotate-90" src="/Top.png"></img>
    </button>
  );
}

export default BotonBack;
