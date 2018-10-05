export class Product {
    id?: string;
    name?: string;
    price?: string;
    amount?: string;
    description?: string;
    category?: string;
    sexo?: string;
    exclusividad = false;
    // sizes: Product[] = [];
    // state: string; vendido reservado agotado venta
    create_at: Date = new Date;


}
