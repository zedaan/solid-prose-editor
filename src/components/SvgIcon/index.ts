const SvgIcon = (path: any) => {
  const svgElement: any = document.createElement('span');
  svgElement.innerHTML = path?.default || path;

  return svgElement;
}

export default SvgIcon;
