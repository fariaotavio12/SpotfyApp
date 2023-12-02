import React from "react";
interface IconProps {
  src: string | Blob; // Caminho para a imagem ou SVG
  alt: string; // Texto alternativo para a imagem
  size?: string | number; // Tamanho do ícone (pode ser uma string ou número)
  style?: React.CSSProperties; // Estilos personalizados
  className?: string
}

const Icon: React.FC<IconProps> = ({ src, alt, size = "24px", style , className}) => {
  const iconStyle: React.CSSProperties = {
    width: size,
    height: size,
    
    ...style, // Incorpora estilos personalizados
  };
  //@ts-ignore
  return <img src={src} alt={alt} style={iconStyle} className={className} width={size} height={size} />;
};

export default Icon;
