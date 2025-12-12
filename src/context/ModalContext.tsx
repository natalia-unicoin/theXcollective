'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { ModalContextType } from '@/types';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [isManifestoOpen, setIsManifestoOpen] = useState(false);

    const openJoinModal = () => setIsJoinModalOpen(true);
    const closeJoinModal = () => setIsJoinModalOpen(false);
    const openManifesto = () => setIsManifestoOpen(true);
    const closeManifesto = () => setIsManifestoOpen(false);

    return (
        <ModalContext.Provider
            value={{
                isJoinModalOpen,
                isManifestoOpen,
                openJoinModal,
                closeJoinModal,
                openManifesto,
                closeManifesto,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
