#ifndef __Block__
#define __Block__

#include <iostream>
#include <cocos2d.h>

USING_NS_CC;

class Block : public Sprite 
{
private:

	//用来存放block
	static Vector<Block*> * blocks;
	int lineIndex;

public:

	static Vector<Block*> * getBlocks();

	static Block* createWithArgs(Color3B color, Size size, std::string label, float fontSize, Color4B textColor);

	//初始化参数：方块颜色、方块大小、字、字体大小、字体颜色
	virtual bool initWithArgs(Color3B color, Size size, std::string label, float fontSize, Color4B textColor);

	//从Vector中移除blocks
	void removeBlock();

	void setLineIndex(int lineIndex);

	int getLineIndex();

	void moveDowm();
	
};


#endif // __Block __