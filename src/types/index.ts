export interface Plant {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface CartItem extends Plant {
    quantity: number;
    category: string;
}

export type PlantCategory = 'orchidaceae' | 'cactaceae' | 'rosaceae';

export type PlantsData = Record<PlantCategory, Plant[]>;

export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Plant, category: PlantCategory) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, change: number) => void;
    totalItems: number;
    totalPrice: number;
}