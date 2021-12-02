import React, {useEffect, useState} from 'react';

const UseHover = (ref, ref1) => {
    const [isHovering, setIsHovering] = useState(false);

    const on = () => setIsHovering(true);
    const off = () => setIsHovering(false);

    useEffect(() => {
        if (!ref.current || !ref1.current) return;

        const node = ref.current;
        const node1 = ref1.current;

        node.addEventListener('mouseover', on);
        node.addEventListener('mouseenter', on);
        node.addEventListener('mouseleave', off);

        node1.addEventListener('mouseover', on);
        node1.addEventListener('mouseenter', on);
        node1.addEventListener('mouseleave', off);

        return () => {
            node.removeEventListener('mouseover', on);
            node.removeEventListener('mouseenter', on);
            node.removeEventListener('mouseleave', off);

            node1.removeEventListener('mouseover', on);
            node1.removeEventListener('mouseenter', on);
            node1.removeEventListener('mouseleave', off);
        }
    }, [ref, ref1]);

    return isHovering;
};

export default UseHover;