const Buttons = ({
  children = 'Button',
  btnStyle = 'bg-black',
  type = 'button',
  onClick = () => {},
}) => {
  return (
    <div>
      <button
        className={`h-10 px-6 w-full font-semibold rounded-md text-white ${btnStyle}`}
        type={type}
        onClick={() => onClick()}>
        {children}
      </button>
    </div>
  )
}

export default Buttons
