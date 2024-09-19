import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import bus from "../eventBus";

const Toast = () => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        const handleToastEvent = (toast) => {
            // 토스트를 받으면 이전 토스트에 받은 토스트 추가
            setToasts((prevToasts) => [...prevToasts, { id: Date.now(), ...toast }]);

            setTimeout(() => {
                // 1.5초 후에 하나씩 토스트 지움
                setToasts((prevToasts) => prevToasts.slice(1));
            }, 1500);
        };

        const unsubscribe = bus.subscribe("SHOW_TOAST", handleToastEvent);

        return () => unsubscribe();
    }, []);

    return createPortal(
        <div className="toast-container">
            {toasts.map((toast, index) => (
                <div key={index} className="toast bg-teal-500 text-white">
                    {toast.message}
                </div>
            ))}
        </div>,
        document.body // body에 추가
    );
};

export default Toast;
