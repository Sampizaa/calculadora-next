export default function Botoes({ valor, onClick, className }) {
    return (
        <button onClick={onClick} className={className}>
            {valor}
        </button>
    );
}
