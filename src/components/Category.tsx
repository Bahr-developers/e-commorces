
  import { RefObject, useState } from "react";
  import { MdKeyboardArrowRight, MdOutlinePhoneAndroid } from "react-icons/md";

  interface SubCategory {
    id: number;
    name: string;
    subtitle?: SubCategory[];
  }
  
  interface CategoryData {
    id: number;
    name: string;
    subtitle?: SubCategory[];
    brend?: { logo: string }[];
  }

  const data:CategoryData[] =[
      {
        id: 1,
        name: "Kiyimlar",
        subtitle: [
          {
            id: Math.random(),
            name: "Qishki kitimlar",
            subtitle: [
              {
                id: Math.random(),
                name: "Kurtka",
              },
              {
                id: Math.random(),
                name: "Sapok",
              },
            ],
          },
          {
            id: Math.random(),
            name: "Yozgi kiyim",
            subtitle: [
              {
                id: Math.random(),
                name: "Fudbolka",
              },
              {
                id: Math.random(),
                name: "Shortik",
              },
            ],
          }
        ],
        brend: [
          {
            logo: 'https://picsum.photos/id/110/60/60'        
          }
        ]
      },
      {
        id: 2,
        name: "aksesuvarlar",
        subtitle: [
          {
            id: Math.random(),
            name: "quloqchinlar",
            subtitle: [
              {
                id: Math.random(),
                name: "navushnik",
              },
              {
                id: Math.random(),
                name: "Airpods",
              },
            ],
          },
          {
            id: Math.random(),
            name: "Chehollar",
            subtitle: [
              {
                id: Math.random(),
                name: "iphone8",
              },
              {
                id: Math.random(),
                name: "A90",
              },
            ],
          },
        ],
        brend: [
          {
            logo: 'https://picsum.photos/id/211/60/60'        
          },
          {
            logo: 'https://picsum.photos/id/121/60/60'        
          },
          {
            logo: 'https://picsum.photos/id/311/60/60'        
          }
        ]
      },
      {
        id: 3,
        name: "Maishiy texnika",
        subtitle: [
          {
            id: Math.random(),
            name: "Go'zallik uchun texnika",
            subtitle: [
              {
                id: Math.random(),
                name: "Soch turmaklash",
              },
              {
                id: Math.random(),
                name: "Soch kesish",
              },
            ],
          },
          {
            id: Math.random(),
            name: "Oshxona buyumlari",
            subtitle: [
              {
                id: Math.random(),
                name: "GAz plita",
              },
              {
                id: Math.random(),
                name: "KIr moshina",
              },
            ],
          },
        ],
        brend: [
          {
            logo: 'https://picsum.photos/id/213/60/60'        
          }
        ]
      }, {
        id: 4,
        name: "Lalaku",
      }
    ];
  
  interface CategoryProps {
    category: RefObject<HTMLDivElement>;
  }

  const Category:React.FC<CategoryProps> = ({category}) => { 
    
      const [subCategories, setSubCategorie] = useState<unknown>(null)
      const handleSubCategory = (id: number) => {
          const categories = data.find(e => e.id == id)
          setSubCategorie(categories)
      }
      return (
          <div ref={category} className="absolute w-[94%] ml-12 flex items-start opacity-0">
            <div className="category-show z-10 w-[18%] mt-[2px] border transition-all bg-white container ">
                    {data.length && data.map(ctg => {
                        return <div key={ctg.id} onMouseOver={()=>handleSubCategory(ctg.id)}>
                        <hr />
                            <div className="categories-child p-2 flex gap-x-5 items-center cursor-pointer justify-between ps-5 hover:text-[#378CE7]">
                                <MdOutlinePhoneAndroid size={25}/>
                                <p className="text-[18px] font-bold">{ctg.name}</p>
                                <MdKeyboardArrowRight size={25}/>
                            </div> 
                        </div>
                    })}             
            </div>
            <ul className="subcategory mt-[3.5px] bg-white z-10 px-10">
                  {subCategories?.subtitle.length &&
                          subCategories.subtitle.map((sub) => {
                            return (
                              <li key={sub.id} className="p-2">
                                <h2 className="font-bold text-[21px]">{sub.name}</h2>
                                <ul>
                                  {sub.subtitle?.length &&
                                    sub.subtitle.map((el) => <li key={el.id}>{el.name}</li>)}
                                </ul>
                              </li>
                            );
                    })}
            </ul>
          </div>
      );
  };

  export default Category;