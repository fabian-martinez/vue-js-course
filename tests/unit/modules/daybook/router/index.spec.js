import daybookRouter from '@/modules/daybook/router'

describe('Pruebas del rauter de daybook', () => {
    it('El rauter debe tener la configuración adecuada', async () => {
         expect( daybookRouter ).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any(Function)
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any(Function)  ,
                    props: expect.any(Function)
                },
            ] 
        })
        // console.log( (await daybookRouter.children[0].component()).default.name );
        // console.log( (await daybookRouter.children[1].component()).default.name );
        const promiseRouter =[]
        daybookRouter.children.forEach( child => promiseRouter.push( child.component() ) )
        const router = ( (await Promise.all(promiseRouter)) ).map( r => r.default.name )
        
        expect( router ).toContain('EntryView')
        expect( router ).toContain('NoEntrySelected')

    });

    it('debe retornar el ID de la ruta', () => {
         const router = { 
            params: {
                id: 'ABC-123'
            }
         }
        //  expect( daybookRouter.children[1].props( router )).toEqual({id:'ABC-123'});
        const entryRouter = daybookRouter.children.find( router => router.name === 'entry')
        expect(entryRouter.props( router )).toEqual({id:'ABC-123'})
    });
});