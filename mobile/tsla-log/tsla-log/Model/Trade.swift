//
//  Trade.swift
//  tsla-log
//
//  Created by Tristan Newman on 6/3/19.
//  Copyright © 2019 Tristan Newman. All rights reserved.
//

import Foundation

class Trade{
    let id : Int
    let price : Float
    let date : String
    let tradeType : String
    let tradePoint : Float
    
    init(id : Int, price : Float, date : String, tradeType : String, tradePoint : Float){
        self.id = id
        self.price = price
        self.date = date
        self.tradeType = tradeType
        self.tradePoint = tradePoint
    }
}
