import { Component } from '@angular/core';
export interface Product {
  share: boolean;
  link: string;
  id: number;
  image: string[];
  name: string;
  description: string;
  rating: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public products: Product[] = [
    {
      share: false,
      id: 1,
      image: ['https://images-na.ssl-images-amazon.com/images/I/71BmDZ6u22L._AC_SL1500_.jpg'],
      name: 'Logitech G203 Prodigy RGB Wired Gaming Mouse – Black',
      description: 'Prodigy Series Logitech G mouse for advanced gaming grade performance up-to 8 times faster response than standard mice so every mouse click and move is near instantaneous from hand to screen',
      rating: 4.7,
      link: 'https://www.amazon.com/Logitech-Prodigy-Wired-Gaming-Mouse/dp/B01M26YUKO/?_encoding=UTF8&pd_rd_w=CqZNo&pf_rd_p=2dbfe895-70fc-42d0-948e-36d5f770d93b&pf_rd_r=6DT08HSVXQAWB7X6JWBZ&pd_rd_r=443918c3-c0a2-4642-a89e-a3584435f691&pd_rd_wg=FCNwS&ref_=pd_gw_unk',
    },
    {
      share: false,
      id: 2,
      image: ['https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg'],
      name: 'Gaming Keyboard and Mouse Combo',
      description: 'PC GAMING KEYBOARD AND GAMING MOUSE COMBO: Includes Redragon RGB Backlit Computer Gaming Keyboard and RGB Backlit Gaming Mouse. ALL-IN-ONE PC GAMER VALUE KIT, Fantastic for Gamers (New Improved Version)',
      rating: 4.6,
      link: 'https://www.amazon.com/Redragon-S101-Keyboard-Ergonomic-Programmable/dp/B00NLZUM36/?_encoding=UTF8&pd_rd_w=CqZNo&pf_rd_p=2dbfe895-70fc-42d0-948e-36d5f770d93b&pf_rd_r=6DT08HSVXQAWB7X6JWBZ&pd_rd_r=443918c3-c0a2-4642-a89e-a3584435f691&pd_rd_wg=FCNwS&ref_=pd_gw_unk',
    },
    {
      share: false,
      id: 3,
      image: ['https://images-na.ssl-images-amazon.com/images/I/61kcUZYve1L._SL1100_.jpg'],
      name: 'Crest 3D White Toothpaste Radiant Mint',
      description: 'Whitens teeth by removing up to 80 percentage of surface stains. Protects teeth against future stains.',
      rating: 4.8,
      link: 'https://www.amazon.com/Crest-White-Toothpaste-Radiant-Mint/dp/B01KZOTRG8/?_encoding=UTF8&pd_rd_w=xihbg&pf_rd_p=b6363b44-58dd-4354-979f-1446a1c45f7a&pf_rd_r=6DT08HSVXQAWB7X6JWBZ&pd_rd_r=443918c3-c0a2-4642-a89e-a3584435f691&pd_rd_wg=FCNwS&ref_=pd_gw_unk',
    },
    {
      share: false,
      id: 4,
      image: ['https://images-na.ssl-images-amazon.com/images/I/71gjJZ4Df2L._AC_SL1500_.jpg'],
      name: 'Kanken Classic Backpack for Everyday',
      description: 'ICONIC: Same classic Kanken design since 1978. Stash everyday essentials in the main zippered compartment, front zippered pocket, and two open side pockets.',
      rating: 4.6,
      link: 'https://www.amazon.com/Fjallraven-Classic-Backpack-Everyday-Graphite/dp/B002OWETK4/?_encoding=UTF8&pd_rd_w=vdlnl&pf_rd_p=ae204524-9feb-47cc-8936-b890d679e0d6&pf_rd_r=6DT08HSVXQAWB7X6JWBZ&pd_rd_r=443918c3-c0a2-4642-a89e-a3584435f691&pd_rd_wg=FCNwS&ref_=pd_gw_unk',
    },
    {
      share: false,
      id: 5,
      image: ['https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg'],
      name: 'Oculus Rift S PC-Powered VR Gaming Headset',
      description: 'Top VR gaming library: Blast, slash and soar your way through the top library in VR gaming. Oculus Rift S lets you play hundreds of games and exclusives already available in the Oculus store, with so much more to come.',
      rating: 4.4,
      link: 'https://www.amazon.com/Oculus-Rift-PC-Powered-Gaming-Headset-pc/dp/B07PTMKYS7/?_encoding=UTF8&pd_rd_w=vdlnl&pf_rd_p=ae204524-9feb-47cc-8936-b890d679e0d6&pf_rd_r=6DT08HSVXQAWB7X6JWBZ&pd_rd_r=443918c3-c0a2-4642-a89e-a3584435f691&pd_rd_wg=FCNwS&ref_=pd_gw_unk',
    },
    {
      share: false,
      id: 6,
      image: ['https://images-na.ssl-images-amazon.com/images/I/71s7HbyqzEL._AC_SL1500_.jpg'],
      name: 'Amazon Basics Hardside Carry-On Spinner Suitcase Luggage',
      description: 'Black, Small 21-inch hardside spinner luggage for weekend getaways or as international carry-on. Protective hard shell with scratch-resistant finish; made of extra-thick ABS (thicker than the competition) for enhanced strength and durability.',
      rating: 4.7,
      link: 'https://www.amazon.com/AmazonBasics-Hardside-Spinner-Luggage-20-Inch/dp/B071VG5N9D/?_encoding=UTF8&pd_rd_w=vdlnl&pf_rd_p=ae204524-9feb-47cc-8936-b890d679e0d6&pf_rd_r=6DT08HSVXQAWB7X6JWBZ&pd_rd_r=443918c3-c0a2-4642-a89e-a3584435f691&pd_rd_wg=FCNwS&ref_=pd_gw_unk',
    },
    {
      share: false,
      id: 7,
      image: ['https://images-na.ssl-images-amazon.com/images/I/817wkPGulTL._AC_SL1500_.jpg'],
      name: 'Samsung (MB-ME128GA/AM) 128GB 100MB/s (U3) MicroSDXC EVO Select Memory Card with Full-Size Adapter',
      description: 'deal for recording 4K UHD video: Samsung MicroSD Evo is perfect for high-res photos, gaming, music, tablets, laptops, action cameras, dslr’s, drones, smartphones (Galaxy S10, S10+, S10e, S9, S9+, Note9, S8, S8+, Note8, S7, S7 Edge, etc.), Android devices and more',
      rating: 4.7,
      link: 'https://www.amazon.com/Samsung-MicroSDXC-Adapter-MB-ME128GA-AM/dp/B06XWZWYVP/?_encoding=UTF8&pd_rd_w=vdlnl&pf_rd_p=ae204524-9feb-47cc-8936-b890d679e0d6&pf_rd_r=6DT08HSVXQAWB7X6JWBZ&pd_rd_r=443918c3-c0a2-4642-a89e-a3584435f691&pd_rd_wg=FCNwS&ref_=pd_gw_unk',
    },
    {
      share: false,
      id: 8,
      image: ['https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpg'],
      name: 'Blendtec Total Classic Original Blender',
      description: 'Easy Blending Cycles: one-touch buttons, six pre-programmed cycles, pulse, and ten speed manual control with the ability to achieve a variety of textures. Complete control to adjust your blending at any time',
      rating: 4.5,
      link: 'https://www.amazon.com/Blendtec-Professional-Grade-10-speeds-Certified-Refurbished/dp/B00TKRQWS8/?_encoding=UTF8&pd_rd_w=LuWbJ&pf_rd_p=18364d24-eac9-49dd-bcb4-cefbc19ec94b&pf_rd_r=6DT08HSVXQAWB7X6JWBZ&pd_rd_r=443918c3-c0a2-4642-a89e-a3584435f691&pd_rd_wg=FCNwS&ref_=pd_gw_unk',
    },
    {
      share: false,
      id: 9,
      image: ['https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SL1250_.jpg'],
      name: 'Mkeke Compatible with iPhone Xr Case',
      description: 'Soft flexible tpu and pc offer extra protection. Shockproof air space cushion offer stronger protection from sudden dropping.',
      rating: 4.7,
      link: 'https://www.amazon.com/Compatible-iPhone-Clear-Anti-Scratch-Absorption/dp/B07HRJL27Z/?_encoding=UTF8&pd_rd_w=xLr2K&pf_rd_p=61a95fae-e859-4f27-858a-6146c1ae863a&pf_rd_r=6DT08HSVXQAWB7X6JWBZ&pd_rd_r=443918c3-c0a2-4642-a89e-a3584435f691&pd_rd_wg=FCNwS&ref_=pd_gw_unk',
    },
    {
      share: false,
      id: 10,
      image: ['https://images-na.ssl-images-amazon.com/images/I/61GBTc2Z4wL._AC_SL1500_.jpg'],
      name: 'PlayStation 4 Slim 1TB Console',
      description: 'Incredible games; Endless entertainment. All new lighter slimmer PS4. 1TB hard drive.',
      rating: 4.8,
      link: 'https://www.amazon.com/PlayStation-4-Slim-1TB-Console/dp/B071CV8CG2/?_encoding=UTF8&pd_rd_w=vdlnl&pf_rd_p=ae204524-9feb-47cc-8936-b890d679e0d6&pf_rd_r=6DT08HSVXQAWB7X6JWBZ&pd_rd_r=443918c3-c0a2-4642-a89e-a3584435f691&pd_rd_wg=FCNwS&ref_=pd_gw_unk',
    },
  ];
}

