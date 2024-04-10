const imgs = import.meta.glob("@/assets/images/*.{png,jpg,jpeg,PNG,JPEG}");

const gallery:string[] = [];

for (const path in imgs) {
  const p = new URL(path, import.meta.url).href;
  gallery.push(p);
}


export default ()=>{
    return gallery;
};