import { ChatTeardropDots } from 'phosphor-react';

//Popover serve para acessibilidade, controle de elementos (aberto e fechado)
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

//import { useState } from 'react'; não é necessário pq o popover ja controla automaticamente

//Estado, false(ñ está aberto) - true(aberto)
//setIsWidgetOpen função para alterar o bool

/*
Função para mudar visibilidade do hello world quando clicar no botão
    function toggleWidgetVisibility(){
        setIsWidgetOpen(!isWidgetOpen)
    }
*/

// && so realiza se a primeira parte for verdadeira, as {} representam um if
export function Widget(){
    return(
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className='w-6 h-6' />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                    </span>
            </Popover.Button>
        </Popover>
    )
}
