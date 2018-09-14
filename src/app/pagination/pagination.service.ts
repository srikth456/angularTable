import { Injectable } from '@angular/core';

@Injectable()
export class PagingService {
    paginationProperties(totalItems: number, currentPage: number = 1, pageSize: number = 10, totalPageLinkButtons: number = 5) {
        totalItems = totalItems || 1;
        currentPage = currentPage || 1;
        pageSize = pageSize || 10;
        totalPageLinkButtons = totalPageLinkButtons || 10;
        const totalPages = Math.ceil(totalItems / pageSize);
        let firstPage: number;
        let lastPage: number;
        if (totalPages <= totalPageLinkButtons) {
            firstPage = 1;
            lastPage = totalPages;
        } else {
            if (currentPage <= Math.ceil(totalPageLinkButtons / 2)) {
                firstPage = 1;
                lastPage = totalPageLinkButtons;
            } else if (currentPage + Math.ceil(totalPageLinkButtons / 2) > totalPages) {
                firstPage = totalPages - totalPageLinkButtons + 1;
                lastPage = totalPages;
            } else {
                firstPage = currentPage - Math.ceil(totalPageLinkButtons / 2) + 1;
                lastPage = firstPage + totalPageLinkButtons - 1;
            }
        }
        const firstIndex = (currentPage - 1) * pageSize;
        const lastIndex = Math.min(firstIndex + pageSize - 1, totalItems - 1);
        const pages = [];
        for (let i = firstPage; i <= lastPage; i++) {
            pages.push(i);
        }
        return {
            firstPage: firstPage,
            lastPage: lastPage,
            firstIndex: firstIndex,
            lastIndex: lastIndex,
            totalPageLinkButtons: totalPageLinkButtons,
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            pages: pages
        };
    }
}
