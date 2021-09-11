import Image from "next/image";

function index() {
  return (
    <div>
      <Image src="/background.png" height={370} width={2000} />
    </div>
  );
}

export default index;
