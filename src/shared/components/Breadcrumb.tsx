import { Breadcrumbs, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { IBreadcrumbItems } from "../../pages/MyTask/utility/models/task.model";

function Breadcrumb({data}:{data:IBreadcrumbItems[]}){
  
      const rows = data.map((item, index) => (
        <Link  to={item.href} key={index}>
           <Title className="breadcrumb-title" order={4}>{item.title}</Title>
        </Link>
      ));

      return (
        <Breadcrumbs styles={{breadcrumb:{textDecoration:'none',color:'var(--text-color)'}}} mb={20}>{rows}</Breadcrumbs>
     );
}

export default Breadcrumb